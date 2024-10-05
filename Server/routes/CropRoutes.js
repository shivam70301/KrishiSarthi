const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const router = express.Router();
const Crop = require("../models/Crop");

// Route to scrape data from the external website and return as JSON
router.get("/scrape/:date", async (req, res) => {
  const { date } = req.params;
  try {
    const url = "https://vegetablemarketprice.com/market/maharashtra/today";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const crops = [];
    
    // Modify the selectors as per actual HTML structure
    $('table tbody tr').each((index, element) => {
      const name = $(element).find('td').eq(0).text().trim();  // Vegetable Name
      const wholesale = parseFloat($(element).find('td').eq(1).text().trim().replace('₹', '').replace(',', ''));  // Wholesale Price
      const retail = $(element).find('td').eq(2).text().trim();  // Retail Price
      const mall = $(element).find('td').eq(3).text().trim();  // Shopping Mall Price
      const unit = $(element).find('td').eq(4).text().trim();  // Unit of Measure

      crops.push({
        name,
        wholesale,
        retail,
        mall,
        unit,
        img: '', // Set this to the image URL if available
        date: date,  // Assuming today's date matches the requested date
      });
    });

    res.json(crops);  // Send the scraped data back as JSON
  } catch (error) {
    console.error("Error scraping crop data:", error);
    res.status(500).json({ message: "Failed to scrape data" });
  }
});

module.exports = router;
