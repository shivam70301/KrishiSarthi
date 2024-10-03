const mongoose = require('mongoose');

const AllCropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  seedSelection: { type: String },
  soilPreparation: { type: String },
  planting: { type: String },
  waterManagement: { type: String },
  fertilizer: { type: String },
  diseases: { type: String },
  pesticides: { type: String },
  harvesting: { type: String }, // Combined field for Time & Methods
});

const AllCrops = mongoose.model('AllCrops', AllCropSchema);
module.exports = AllCrops;
