// routes/pesticideRoutes.js
const express = require('express');
const Pesticide = require('../models/Pesticides');

const router = express.Router();

// GET all pesticides
router.get('/', async (req, res) => {
  try {
    const pesticides = await Pesticide.find();
    res.status(200).json(pesticides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET pesticide by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const pesticide = await Pesticide.findById(req.params.id);
//     if (!pesticide) {
//       return res.status(404).json({ message: 'Pesticide not found' });
//     }
//     res.status(200).json(pesticide);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// POST a new pesticide
router.post('/', async (req, res) => {
  const newPesticide = new Pesticide(req.body);
  try {
    const savedPesticide = await newPesticide.save();
    res.status(201).json(savedPesticide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE a pesticide by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedPesticide = await Pesticide.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedPesticide) {
//       return res.status(404).json({ message: 'Pesticide not found' });
//     }
//     res.status(200).json(updatedPesticide);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// DELETE a pesticide by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedPesticide = await Pesticide.findByIdAndDelete(req.params.id);
//     if (!deletedPesticide) {
//       return res.status(404).json({ message: 'Pesticide not found' });
//     }
//     res.status(200).json({ message: 'Pesticide deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
