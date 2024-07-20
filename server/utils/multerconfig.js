// multerConfig.js

import multer from 'multer';
import path from 'path';
import shortid from 'shortid';

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images'); // Change 'images' to your desired folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + shortid.generate() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: diskStorage,
    limits: {
        fileSize: 1 * 1024 * 1024, // 1MB limit
    },
    fileFilter: (req, file, cb) => {
        const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
        const extname = path.extname(file.originalname).toLowerCase();
        if (acceptedExtensions.includes(extname)) {
            cb(null, true); // Accept the file
        } else {
            cb(new Error('Invalid file extension'));
        }
    },
});

// Error handler middleware for Multer errors
const errorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: 'File upload error: ' + err.message });
    } else if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File size limit exceeded.' });
    } else {
        return res.status(400).json({ error: err.message });
    }
};

export  { upload, errorHandler }; // Corrected export statement
