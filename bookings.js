const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
  const { guest_id, room_id, check_in, check_out } = req.body;
  db.query('INSERT INTO bookings (guest_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)', 
    [guest_id, room_id, check_in, check_out], 
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId });
  });
});

module.exports = router;
