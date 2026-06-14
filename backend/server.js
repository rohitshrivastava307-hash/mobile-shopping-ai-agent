const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const phoneRoutes = require('./routes/phoneroutes');
const chatRoutes = require('./routes/chatroutes');
const connectDB = require('../backend/config/db');



connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mobile AI Agent API Running');
});

const PORT = process.env.PORT || 3000;

app.use('/api/phones', phoneRoutes);
app.use('/api/chat', chatRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});