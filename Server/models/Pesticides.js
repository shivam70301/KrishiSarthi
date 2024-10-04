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
  category: {
    type: String,
    required: true,
  },
  application: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  activeIngredient: {
    type: String,
    required: true,
  },
  precautions: {
    type: String,
    required: true,
  },
  environmentalImpact: {
    type: String,
    required: true,
  },
  recommendedUsage: {
    type: String,
    required: true,
  },
});

const Pesticides =mongoose.model('Pesticide', pesticideSchema);
module.exports = Pesticides;
