const express = require('express');
const router = express.Router();
const Score = require('../models/scores');

// Read all
router.get('/', async (req, res) => {
    try {
        const scores = await Score.find();
        res.json(scores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create one
router.post('/', async (req, res) => {
    const { username, score, joke } = req.body;

    // Validate input length
    if (username.length < 3) {
        return res.status(400).json({ error: 'Username must be at least 3 characters long.' });
    }

    // Validate score
    if (typeof score !== 'number' || isNaN(score)) {
        return res.status(400).json({ error: 'Score must be a valid number.' });
    }

    // You can add additional validations for the 'joke' field if needed
    try {
        const existingJoke = await Joke.findById(joke);
        if (!existingJoke) {
            return res.status(400).json({ error: 'The associated joke does not exist.' });
        }

        // Check if the username has already given a score to this joke
        const existingScore = await Score.findOne({ username, joke });
        if (existingScore) {
            return res.status(400).json({ error: 'The username has already given a score to this joke.' });
        }

        const newScore = new Score({ username, score, joke });
        const savedScore = await newScore.save();
        res.status(201).json(savedScore);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
