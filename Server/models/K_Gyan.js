const mongoose = require('mongoose');

const K_GyanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const K_Gyan = mongoose.model('K_Gyan', K_GyanSchema);
module.exports = K_Gyan;
