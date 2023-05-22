// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

// Create an instance of Express app
const app = express();
app.use(cors({
  origin: ['http://localhost:3000']
}))

// Set up middleware for parsing JSON request bodies
app.use(express.json());

// Set up routes and endpoints for handling weather data requests
// e.g., you can set up a route for getting weather data from a third-party API
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  console.log(req.params.city)
  try {
    // Make API request to get weather data
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03d194357492876e8fd93d425c26940d`);
    const weatherData = response.data;
    // Send weather data as response
    res.status(200).json(weatherData);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Connect to MongoDB database
mongoose.connect('mongodb+srv://MuslimNerd:Mariam36@cluster0.er3uowr.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});

// Start the Express app
const port = 5000; // Change this to your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
