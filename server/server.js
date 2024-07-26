import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';

import eventRoutes from './routes/eventRoutes.js';
import executiveRoutes from './routes/executiveRoutes.js';
import galleryRoute from './routes/galleryRoute.js';
import projectsRoutes from './routes/projectsRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// CORS setup
app.use(cors({
    origin: ['http://localhost:5173','*'], // Replace with your frontend URL
    credentials: true,
}));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Example of isAuthenticated middleware function
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Use routes
app.use('/api/events', eventRoutes);
app.use('/api/executives', executiveRoutes);
app.use('/api/libraries', galleryRoute);
app.use('/api/projects', projectsRoutes);
app.use('/api/auth', userRoutes);

// Auth check endpoint
app.get('/api/isAuth', isAuthenticated, (req, res) => {
    res.status(200).json({ message: 'Authenticated' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
