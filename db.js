const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/Hotel';
const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// Get the default connection 
const db = mongoose.connection; 

// Define event listeners for database connections
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

// Export the database connection
module.exports = db;
