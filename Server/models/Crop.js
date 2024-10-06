const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  wholesale: { type: Number, required: true },
  retail: { type: String, required: true }, // Change to String to accommodate ranges
  mall: { type: String, required: true },  // Change to String to accommodate ranges
  unit: { type: String, required: true },
});

module.exports = mongoose.model("Crop", cropSchema);
