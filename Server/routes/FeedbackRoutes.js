// routes/feedback.js
const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// POST feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to submit feedback', details: error.message });
  }
});

module.exports = router;
