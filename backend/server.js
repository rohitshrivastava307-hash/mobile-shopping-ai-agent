const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const phoneRoutes = require('./routes/phoneRoutes');
const connectDB = require('../backend/config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mobile AI Agent API Running');
});

const PORT = process.env.PORT || 3000;

app.use('/api/phones', phoneRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});