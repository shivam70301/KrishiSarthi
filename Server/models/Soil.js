// models/Soil.js
const mongoose = require('mongoose');

const soilSchema = new mongoose.Schema({
  region: { type: String, required: true },
  soilType: { type: String },  
  pH: { type: String },  
  fertility: { type: String },  
  moistureLevel: { type: String },  
  soilDepth: { type: String },  
  electricalConductivity: { type: String },  
  nutrients: {
    nitrogen: { type: Number },  
    phosphorus: { type: Number },  
    potassium: { type: Number },  
    organicMatter: { type: String },  
  },
  micronutrients: {
    zinc: { type: Number },  
    iron: { type: Number },  
    manganese: { type: Number },  
  },
  waterRetention: { type: String },  
  texture: { type: String },  
  soilTestResults: [{
    parameter: { type: String },  
    result: { type: String },  
    optimalRange: { type: String },  
    recommendation: { type: String },  
  }],
  bestPractices: [{ type: String }]  
});

const Soil = mongoose.model('Soil', soilSchema);
module.exports = Soil;
