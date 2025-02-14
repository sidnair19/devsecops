const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const pipelineRoutes = require('./routes/pipelineRoutes');
const securityRoutes = require('./routes/securityRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/pipeline', pipelineRoutes);
app.use('/api/security', securityRoutes);
app.get('/health', (req, res) => res.status(200).send('OK'));

// Set Mongoose strictQuery to avoid deprecation warnings
mongoose.set('strictQuery', true);

// Connect to MongoDB with proper error handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err);
    process.exit(1); // Exit process if MongoDB connection fails
  }
};

connectDB();

// Graceful shutdown for MongoDB
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('🛑 MongoDB connection closed');
  process.exit(0);
});

// Prevent server from starting when running tests
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

// Export the app for Jest tests
module.exports = app;