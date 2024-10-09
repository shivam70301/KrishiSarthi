const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    seedSelection: { type: String },
    soilPreparation: { type: String },
    planting: { type: String },
    waterManagement: { type: String },
    fertilizer: { type: String },
    diseases: { type: String },
    pesticides: { type: String },
    harvesting: { type: String }, 
    benefits: {type: String},
  district: { type: String, required: true }
});

const CropRecommendation = mongoose.model('CropRecommendation', cropSchema);

module.exports = CropRecommendation;
