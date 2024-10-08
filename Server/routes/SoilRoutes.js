// routes/soilRoutes.js
const express = require('express');
const Soil = require('../models/Soil');
const router = express.Router();

// Get all soil information
router.get('/', async (req, res) => {
  try {
    const soils = await Soil.find();
    res.json(soils);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get soil information by region
router.get('/:region', async (req, res) => {
  try {
    const soil = await Soil.findOne({ region: req.params.region });
    if (!soil) return res.status(404).json({ message: 'Soil information not found' });
    res.json(soil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new soil information
router.post('/', async (req, res) => {
  const soil = new Soil(req.body);
  try {
    const newSoil = await soil.save();
    res.status(201).json(newSoil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
