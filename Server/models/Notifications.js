// models/Notification.js
const mongoose = require('mongoose');

// Define Notification Schema
const notificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export the Notification model
const Notification = mongoose.model('Notifications', notificationSchema);
module.exports = Notification;
