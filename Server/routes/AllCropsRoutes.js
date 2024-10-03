// server/routes/AllCropsRoutes.js
const express = require('express');
const Crop = require('../models/AllCrops');

const router = express.Router();

// Get all crops
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new crop
router.post('/', async (req, res) => {
  const crop = new Crop(req.body);
  try {
    const savedCrop = await crop.save();
    res.status(201).json(savedCrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
