import express, { json } from 'express';
import pkg from 'mongoose';
import dotenv from 'dotenv';
// import userRoute from './routes/user.js';

const { connect, connection } = pkg;

// Load environment variables from .env file
dotenv.config();

// MongoDB connection string from environment variables
const mongoString = process.env.MONGO_URI;

// Connect to MongoDB
connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = connection;

db.on('error', (error) => {
    console.log('MongoDB connection error:', error);
});

db.once('connected', () => {
    console.log('Database connected');
});

// Create an Express application
const app = express();

// Middleware
app.use(json());

// Routes
// app.use('/api/user', userRoute);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
