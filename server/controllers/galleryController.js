import Gallery from '../models/Gallery.js';
import cloudinary from '../utils/cloudinaryconfig.js'; // Import the configured Cloudinary instance

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Create Gallery
export const createGalleryItem = async (req, res) => {
    try {
        const { caption, link} = req.body;
        const cover = req.file; // Assuming photo is handled as file upload

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate input
        if (!caption || !link) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let photoUrl = null;
        if (cover) {
            const result = await cloudinary.uploader.upload(cover.path, {
                folder: 'Gallerys',
            });
            photoUrl = result.secure_url;
        }

        const newGallery = new Gallery({
            caption,
            link,
            cover: photoUrl // Save the Cloudinary URL
        });

        await newGallery.save();
        res.status(201).json(newGallery);
    } catch (error) {
        handleError(res, error);
    }
};

// Get All Gallerys
export const getAllGalleryItems = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const Gallerys = await Gallery.find();
        res.status(200).json(Gallerys);
    } catch (error) {
        handleError(res, error);
    }
};

// Get Gallery by ID
export const getGalleryItemById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid Gallery ID format' });
        // }

        const Gallery = await Gallery.findById(id);
        if (!Gallery) {
            return res.status(404).json({ message: 'Gallery not found' });
        }
        res.status(200).json(Gallery);
    } catch (error) {
        handleError(res, error);
    }
};

// Update Gallery
export const updateGalleryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const photo = req.file;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid Gallery ID format' });
        // }

        let updatedPhotoUrl = updates.photo;

        if (photo) {
            const result = await cloudinary.uploader.upload(photo.path, {
                folder: 'Gallerys',
            });
            updatedPhotoUrl = result.secure_url;
        }

        const updatedGallery = await Gallery.findByIdAndUpdate(id, { ...updates, cover: updatedPhotoUrl }, { new: true, runValidators: true });
        if (!updatedGallery) {
            return res.status(404).json({ message: 'Gallery not found' });
        }
        res.status(200).json(updatedGallery);
    } catch (error) {
        handleError(res, error);
    }
};

// Delete Gallery
export const deleteGalleryItem = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid Gallery ID format' });
        // }

        const deletedGallery = await Gallery.findByIdAndDelete(id);
        if (!deletedGallery) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json({ message: 'Gallery deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
