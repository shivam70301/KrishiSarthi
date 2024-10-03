const express = require('express');
const Video = require('../models/K_Gyan');

const router = express.Router();

// Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new video
router.post('/', async (req, res) => {
  const video = new Video({
    title: req.body.title,
    url: req.body.url,
  });

  try {
    const savedVideo = await video.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
