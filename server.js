// server.js
const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Oracle DB connection configuration
const dbConfig = {
  user: 'yourUsername',
  password: 'yourPassword',
  connectString: 'yourConnectionString'
};

// Route to handle form submission
app.post('/submit', async (req, res) => {
  const { name, contact, course } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `INSERT INTO yourTable (name, contact, course) VALUES (:name, :contact, :course)`,
      { name, contact, course },
      { autoCommit: true }
    );

    res.status(200).send('Form data submitted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error submitting form data');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
