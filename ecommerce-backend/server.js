// backend/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const app = express();

app.use(cors());
app.use(express.json()); // to parse JSON data

// API route for fetching products from the external API
app.get('/api/products', async (req, res) => {
  try {
    // Fetch data from the external API
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;
    
    // Send products data as a response to the frontend
    res.json(products);
  } catch (error) {
    console.error('Error fetching products from external API:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Server listening on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
