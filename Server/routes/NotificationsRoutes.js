// routes/notifications.js
const express = require('express');
const router = express.Router();
const Notification = require('../models/Notifications');

// @route    GET /api/notifications
// @desc     Get all notifications
// @access   Public
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ date: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route    POST /api/notifications
// @desc     Create a new notification
// @access   Public (You can add authentication here if needed)
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Please include title and description' });
  }

  try {
    const newNotification = new Notification({
      title,
      description
    });

    const notification = await newNotification.save();
    res.json(notification);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
