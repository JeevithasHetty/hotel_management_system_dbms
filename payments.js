const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
  const { booking_id, amount, payment_date } = req.body;
  db.query('INSERT INTO payments (booking_id, amount, payment_date) VALUES (?, ?, ?)', 
    [booking_id, amount, payment_date], 
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId });
  });
});

module.exports = router;
