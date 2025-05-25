const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// Register
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    try {
        await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashed]);
        res.status(201).json({ message: 'User registered' });
    } catch (err) {
        res.status(400).json({ error: 'Email already exists' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(400).json({ error: 'Invalid credentials' });
    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    res.json({ token });
});

module.exports = router;