const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  wholesale: { type: Number, required: true },
  retail: { type: Number, required: true },
  mall: { type: Number, required: true },
  unit: { type: String, required: true },
  img: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Crop", cropSchema);
