const express = require('express');
const cors = require('cors');
const axios = require('axios');
const alumni = require('./alumni');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

const locations = [
  { name: 'B - Block', coords: [17.396682179756525, 78.48997064971536] },
  { name: 'Basket ball court', coords: [17.397279785317313, 78.48994918895518] },
  { name: 'Bhavishya Dwar', coords: [17.397536318799695, 78.48988376943426] },
  { name: 'Canteen', coords: [17.397329638533396, 78.49100962665318] },
  { name: 'Auditorium', coords: [17.397632300268608, 78.49066697445483] },
  { name: 'D-Block', coords: [17.397522881381963, 78.49035248545331] },
  { name: 'Library', coords: [17.39754591694445, 78.49019825843526] },
  { name: 'Foot Ball Ground', coords: [17.396971306863716, 78.49026129034559] },
];

app.get('/api/locations', (req, res) => {
  res.json(locations);
});

app.get('/api/alumni', (req, res) => {
  res.json(alumni);
});

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
