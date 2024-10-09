const mongoose = require("mongoose");

const croppriceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  unit: { type: String, required: true },
  market: { type: Number, required: true },
  retail: { type: String, required: true }, // Change to String to accommodate ranges
  supermall: { type: String, required: true },  // Change to String to accommodate ranges
});

module.exports = mongoose.model("Cropprice", croppriceSchema);
