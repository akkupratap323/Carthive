const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const itemRoutes = require('./routes/items');
const stockRoutes = require('./routes/stocks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Replaces body-parser

// Database connection
mongoose.connect('mongodb://localhost:27017/stocks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection success and error handling
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Routes
app.use('/items', itemRoutes);
app.use('/api/stocks', stockRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
