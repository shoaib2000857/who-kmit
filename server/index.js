const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

// Fake campus locations
const locations = [
  { name: 'Main Gate', coords: [17.3958, 78.4035] },
  { name: 'Library', coords: [17.3962, 78.4040] },
  { name: 'Auditorium', coords: [17.3955, 78.4030] },
  { name: 'Cafeteria', coords: [17.3959, 78.4038] },
];

app.get('/api/locations', (req, res) => {
  res.json(locations);
});

// OpenWeather API endpoint
app.get('/api/weather', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY || 'YOUR_OPENWEATHER_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad,IN&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
