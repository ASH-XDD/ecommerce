// backend/routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ✅ Just use '/' here, since this file is mounted at /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // or fetch from external API if needed
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
