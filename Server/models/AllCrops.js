// server/models/Crop.js
const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  growingTechnique: { type: String },
  diseases: { type: String },
  benefits: { type: String },
  climate: { type: String },
  watering: { type: String },
  soil: { type: String },
  fertilizer: { type: String },
  pestControl: { type: String },
  harvesting: { type: String },
});

const AllCrops = mongoose.model('AllCrops', cropSchema);
module.exports = AllCrops;
