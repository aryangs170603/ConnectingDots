const express = require('express');
const app = express();
const PORT = 5000;

// Sample data loaded from a JSON file or directly embedded
const courseData = require('./Datasciencecontent.json'); // Assuming you save the JSON above as courseData.json

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
