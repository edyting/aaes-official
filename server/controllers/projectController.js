import { projects } from '../models/projects.js';
import  cloudinary  from '../utils/cloudinaryconfig.js'; // Import the configured Cloudinary instance

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Create projects
export const createprojects = async (req, res) => {
    try {
        const { title, article } = req.body;
        const coverImg = req.file; // Assuming image is handled as file upload

        // Check if user is logged in
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate input
        if (!title || !article) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        let imageUrl = null;
        if (coverImg) {
            const result = await cloudinary.uploader.upload(coverImg.path, {
                folder: 'projects',
            });
            imageUrl = result.secure_url;
        }

        const project = new projects({
            title,
            article,
            image: imageUrl, // Save the Cloudinary URL
            author: req.session.userId // Set the author as the current logged-in user
        });

        await project.save();
        res.status(201).json(project);
    } catch (error) {
        handleError(res, error);
    }
};

// Get All projects
export const getAllprojects = async (req, res) => {
    try {
        const projectss = await projects.find();
        res.status(200).json(projectss);
    } catch (error) {
        handleError(res, error);
    }
};

// Get projects by ID
export const getprojectsById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid projects ID format' });
        // }

        const project = await projects.findById(id).populate('author', 'username');
        if (!project) {
            return res.status(404).json({ message: 'projects not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        handleError(res, error);
    }
};

// Update projects
export const updateprojects = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const coverImg = req.file; // Handling new image upload if provided

        // Check if user is logged in
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid projects ID format' });
        // }

        const project = await projects.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'projects not found' });
        }

        // Check if the logged-in user is the author of the projects
        if (project.author.toString() !== req.session.userId) {
            return res.status(403).json({ message: 'User not authorized to update this project' });
        }

        let updatedImageUrl = project.image;
        if (coverImg) {
            const result = await cloudinary.uploader.upload(coverImg.path, {
                folder: 'projects',
            });
            updatedImageUrl = result.secure_url;
        }

        const updatedProject = await projects.findByIdAndUpdate(id, { ...updates, image: updatedImageUrl }, { new: true, runValidators: true });
        res.status(200).json(updatedProject);
    } catch (error) {
        handleError(res, error);
    }
};

// Delete projects
export const deleteprojects = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if user is logged in
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid projects ID format' });
        // }

        const project = await projects.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'projects not found' });
        }

        // Check if the logged-in user is the author of the projects
        if (project.author.toString() !== req.session.userId) {
            return res.status(403).json({ message: 'User not authorized to delete this project' });
        }

        await project.remove();
        res.status(200).json({ message: 'projects deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
