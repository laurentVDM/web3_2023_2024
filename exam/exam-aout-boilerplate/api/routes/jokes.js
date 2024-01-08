const express = require('express');
const router = express.Router();
const Joke = require('../models/jokes');

// Read all
router.get('/', async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read one
router.get('/:id', async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }
    res.json(joke);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete one
router.delete('/:id', async (req, res) => {
  try {
    await Joke.findByIdAndRemove(req.params.id);
    res.json({ message: 'Joke deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one
router.post('/', async (req, res) => {
    const { question, answer, category } = req.body;

    // Validate input length
    if (question.length < 3 || answer.length < 3 || category.length < 3) {
      return res.status(400).json({ error: 'Question, answer, and category must be at least 3 characters long.' });
    }
  
    const joke = new Joke({
      question,
      answer,
      category,
    });

  try {
    const newJoke = await joke.save();
    res.status(201).json(newJoke);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
