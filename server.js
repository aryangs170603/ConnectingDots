// server.jsx
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'https://c756b4a9-bd7d-43c1-bf2c-ab1c8a1252b1-00-1znc9zo60okew.pike.replit.dev:3000/' // Replace with your React app's URL if needed
}));

// Load course data
const courseData = require('./Datasciencecontent.json');

// API endpoint to get content based on city
app.get('/api/content/:city', (req, res) => {
  const city = req.params.city.toLowerCase();
  const content = courseData[city];

  if (content) {
    res.json(content);
  } else {
    res.status(404).json({ message: 'City not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
