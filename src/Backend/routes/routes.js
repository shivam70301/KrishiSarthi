const express = require('express');
const router = express.Router();
const YourModel = require('../models/yourModel');

// GET all data
router.get('/', async (req, res) => {
  try {
    const data = await YourModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// POST data
router.post('/', async (req, res) => {
  const { name, description } = req.body;

  try {
    const newData = new YourModel({
      name,
      description
    });
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
