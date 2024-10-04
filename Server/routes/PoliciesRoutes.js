// routes/policies.js
const express = require('express');
const Policies = require('../models/Policies');
const router = express.Router();

// Get all policies
router.get('/', async (req, res) => {
  try {
    const policies = await Policies.find();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new policy
router.post('/', async (req, res) => {
  const policies = new Policies({
    title: req.body.title,
    description: req.body.description,
    objectives: req.body.objectives,
    eligibility: req.body.eligibility,
    benefits: req.body.benefits,
    details: req.body.details,
    link: req.body.link,
  });

  try {
    const newPolicies = await policies.save();
    res.status(201).json(newPolicies);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
