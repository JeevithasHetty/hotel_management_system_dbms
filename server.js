const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Add this for form submissions

app.use(express.static(__dirname)); // Serve HTML/CSS from root

// Routes
app.use('/api/guests', require('./guests'));
app.use('/api/rooms', require('./rooms'));
app.use('/api/bookings', require('./bookings'));
app.use('/api/payments', require('./payments'));
app.use('/api/rooms', require('./rooms'));
app.use('/api/staff', require('./staffRoute'));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
