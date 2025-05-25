const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Request a book
router.post('/', async (req, res) => {
    const { book_id, seeker_id, message } = req.body;
    await pool.query(
        'INSERT INTO requests (book_id, seeker_id, message, status) VALUES (?, ?, ?, ?)',
        [book_id, seeker_id, message, 'pending']
    );
    res.status(201).json({ message: 'Request sent' });
});

// Get requests for a user
router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const [requests] = await pool.query(
        'SELECT * FROM requests WHERE seeker_id = ? OR owner_id = ?',
        [user_id, user_id]
    );
    res.json(requests);
});

module.exports = router;