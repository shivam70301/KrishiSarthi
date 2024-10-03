const mongoose = require('mongoose');

const YourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

const YourModel = mongoose.model('YourCollection', YourSchema);
module.exports = YourModel;
