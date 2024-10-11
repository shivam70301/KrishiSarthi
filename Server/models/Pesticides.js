// models/Pesticide.js
const mongoose = require('mongoose');

const pesticideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technicalContent: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
  buyLink: {
    type: String,
    required: true,
  },
});

const Pesticides =mongoose.model('Pesticide', pesticideSchema);
module.exports = Pesticides;
