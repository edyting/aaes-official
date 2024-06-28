import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';

import eventRoutes from './routes/eventRoutes.js';
// import executiveRoutes from './routes/executiveRoutes.js';
// import libraryRoutes from './routes/libraryRoutes.js';
import postRoutes from './routes/postRoutes.js';
// import projectRoutes from './routes/projectRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/events', eventRoutes);
// app.use('/api/executives', executiveRoutes);
// app.use('/api/libraries', libraryRoutes);
app.use('/api/posts', postRoutes);
// app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
