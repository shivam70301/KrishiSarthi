const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const Crop = require("../models/Crop");
const router = express.Router();

// Route to scrape data from the external website and return as JSON
router.get("/scrape/today", async (req, res) => {
  try {
    const url = "https://vegetablemarketprice.com/market/maharashtra/today";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const crops = [];
    
    // Scrape the crops data
    $('table tbody tr').each((index, element) => {
      const name = $(element).find('td').eq(1).text().trim();  // Vegetable Name
      const wholesale = parseFloat($(element).find('td').eq(2).text().trim().replace('₹', '').replace(',', ''));  // Wholesale Price
      const retail = $(element).find('td').eq(3).text().trim();  // Retail Price (keep as string to include ranges)
      const mall = $(element).find('td').eq(4).text().trim();  // Shopping Mall Price (keep as string to include ranges)
      const unit = $(element).find('td').eq(5).text().trim();  // Unit of Measure

      crops.push({
        name,
        wholesale,
        retail,
        mall,
        unit,
      });
    });

    // Optional: Save to MongoDB or update existing records
    await Crop.deleteMany();  // Delete old records
    await Crop.insertMany(crops);  // Insert new records

    res.json(crops);  // Send the scraped data back as JSON
  } catch (error) {
    console.error("Error scraping crop data:", error);
    res.status(500).json({ message: "Failed to scrape data" });
  }
});

module.exports = router;
