// controllers/galleryController.js

import Gallery from '../models/gallery.js';

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Create a new gallery item
export const createGalleryItem = async (req, res) => {
    try {
        const { caption, link } = req.body;
        const cover = req.file; // Assuming cover is handled as file upload

        // Validate input
        if (!caption || !link) {
            return res.status(400).json({ message: 'Caption and link are required' });
        }

        const newGalleryItem = new Gallery({
            caption,
            link,
            cover: cover ? cover.path : null // Adjust according to file handling logic
        });

        await newGalleryItem.save();
        res.status(201).json(newGalleryItem);
    } catch (error) {
        handleError(res, error);
    }
};

// Get all gallery items
export const getAllGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.find();
        res.status(200).json(galleryItems);
    } catch (error) {
        handleError(res, error);
    }
};

// Get a gallery item by ID
export const getGalleryItemById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid gallery item ID format' });
        }

        const galleryItem = await Gallery.findById(id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        res.status(200).json(galleryItem);
    } catch (error) {
        handleError(res, error);
    }
};

// Update a gallery item by ID
export const updateGalleryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const cover = req.file; // Handle file upload if there's a new cover

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid gallery item ID format' });
        }

        if (cover) {
            updates.cover = cover.path;
        }

        const updatedGalleryItem = await Gallery.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatedGalleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        res.status(200).json(updatedGalleryItem);
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a gallery item by ID
export const deleteGalleryItem = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid gallery item ID format' });
        }

        const deletedGalleryItem = await Gallery.findByIdAndDelete(id);
        if (!deletedGalleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        res.status(200).json({ message: 'Gallery item deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
