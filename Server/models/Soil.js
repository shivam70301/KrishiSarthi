// models/Soil.js
const mongoose = require('mongoose');

const soilSchema = new mongoose.Schema({
  region: { type: String, required: true },
  soilType: { type: String, required: true },
  pH: { type: String, required: true },
  fertility: { type: String, required: true },
  moistureLevel: { type: String, required: true },
  soilDepth: { type: String, required: true },
  electricalConductivity: { type: String, required: true },
  nutrients: {
    nitrogen: { type: Number, required: true },
    phosphorus: { type: Number, required: true },
    potassium: { type: Number, required: true },
    organicMatter: { type: String, required: true },
  },
  micronutrients: {
    zinc: { type: String, required: true },
    iron: { type: String, required: true },
    manganese: { type: String, required: true },
  },
  waterRetention: { type: String, required: true },
  texture: { type: String, required: true },
  soilTestResults: [{
    parameter: { type: String, required: true },
    result: { type: String, required: true },
    optimalRange: { type: String, required: true },
    recommendation: { type: String, required: true },
  }],
  bestPractices: [{ type: String, required: true }]
});

const Soil = mongoose.model('Soil', soilSchema);
module.exports = Soil;
