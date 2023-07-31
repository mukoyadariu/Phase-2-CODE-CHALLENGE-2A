import React from 'react';

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const dbPath = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Define the generateUniqueId function on the server side
const generateUniqueId = () => {
  // Implement your logic to generate a unique ID here
  // For simplicity, we'll use a random number for demonstration purposes
  return Math.random().toString(36).substring(2);
};

// API endpoint to get all bots from db.json
app.get('/api/bots', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading the database file.' });
    } else {
      const bots = JSON.parse(data);
      res.json(bots);
    }
  });
});

// API endpoint to add a bot to db.json
app.post('/api/bots', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading the database file.' });
    } else {
      const bots = JSON.parse(data);
      const newBot = req.body;

      // Generate a unique ID for the new bot (You can use a UUID library)
      // For this example, we'll assume you have a function to generate a unique ID: generateUniqueId()
      newBot.id = generateUniqueId();

      bots.push(newBot);

      fs.writeFile(dbPath, JSON.stringify(bots), 'utf8', (err) => {
        if (err) {
          res.status(500).json({ error: 'Error writing to the database file.' });
        } else {
          res.json(newBot);
        }
      });
    }
  });
});

// API endpoint to delete a bot from db.json
app.delete('/api/bots/:id', (req, res) => {
  const botId = req.params.id;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading the database file.' });
    } else {
      const bots = JSON.parse(data);
      const filteredBots = bots.filter((bot) => bot.id !== botId);

      fs.writeFile(dbPath, JSON.stringify(filteredBots), 'utf8', (err) => {
        if (err) {
          res.status(500).json({ error: 'Error writing to the database file.' });
        } else {
          res.json({ success: true });
        }
      });
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

