const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM guests', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { name, email, phone } = req.body;
  db.query('INSERT INTO guests (name, email, phone) VALUES (?, ?, ?)', [name, email, phone], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId });
  });
});

module.exports = router;
