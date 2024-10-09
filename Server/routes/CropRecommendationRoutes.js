const express = require('express');
const router = express.Router();
const Crop = require('../models/CropRecommendation');

// Route to fetch crops by district
router.get('/district/:district', async (req, res) => {
  try {
    const crops = await Crop.find({ district: req.params.district });
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to add a new crop (admin usage)
router.post('/', async (req, res) => {
  const crop = new Crop({
    name: req.body.name,
    image: req.body.image,
    growingTechnique: req.body.growingTechnique,
    diseases: req.body.diseases,
    benefits: req.body.benefits,
    climate: req.body.climate,
    watering: req.body.watering,
    soil: req.body.soil,
    fertilizer: req.body.fertilizer,
    pestControl: req.body.pestControl,
    harvesting: req.body.harvesting,
    district: req.body.district
  });

  try {
    const newCrop = await crop.save();
    res.status(201).json(newCrop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
