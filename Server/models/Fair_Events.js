const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Event Schema
const Fair_EventsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL to image
    required: true,
  },
});


const Fair_Events = mongoose.model('Fair_Events', Fair_EventsSchema);
module.exports = Fair_Events;
