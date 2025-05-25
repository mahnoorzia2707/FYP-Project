const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all books
router.get('/', async (req, res) => {
    const [books] = await pool.query('SELECT * FROM books');
    res.json(books);
});

// Add a book
router.post('/', async (req, res) => {
    const { title, author, genre, condition, location, image, url, user_id } = req.body;
    await pool.query(
        'INSERT INTO books (title, author, genre, book_condition, location, image, url, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [title, author, genre, condition, location, image, url, user_id]
    );
    res.status(201).json({ message: 'Book added' });
});

module.exports = router;