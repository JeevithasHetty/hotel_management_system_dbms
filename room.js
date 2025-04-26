// rooms.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Get all available rooms
router.get('/available', (req, res) => {
  db.query('SELECT COUNT(*) AS available_rooms FROM rooms WHERE available = 1', (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

module.exports = router;