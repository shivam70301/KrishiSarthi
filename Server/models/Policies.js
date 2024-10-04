// models/Policy.js
const mongoose = require('mongoose');

// Define the schema for a policy
const PoliciesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  objectives: { type: String, required: true },
  eligibility: { type: String, required: true },
  benefits: { type: String, required: true },
  details: { type: String, required: true },
  link: { type: String, required: true },
});

// Create the model from the schema and export it
module.exports = mongoose.model('Policies', PoliciesSchema);
