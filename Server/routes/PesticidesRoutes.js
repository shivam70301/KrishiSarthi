// routes/pesticideRoutes.js
const express = require('express');
const Pesticide = require('../models/Pesticides');

const router = express.Router();

// GET all pesticides
router.get('/', async (req, res) => {
  try {
    const pesticides = await Pesticide.find();
    res.status(200).json(pesticides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new pesticide
router.post('/', async (req, res) => {
  const newPesticide = new Pesticide(req.body);
  try {
    const savedPesticide = await newPesticide.save();
    res.status(201).json(savedPesticide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
