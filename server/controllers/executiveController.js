import Executive from '../models/executive.js'; // Fixed the model import

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Create Executive
export const createExecutive = async (req, res) => {
    try {
        const { fullName, position, academicYear, programme } = req.body;
        const photo = req.file; // Assuming photo is handled as file upload

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate input
        if (!fullName || !position || !academicYear || !programme) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newExecutive = new Executive({
            fullName,
            position,
            academicYear,
            programme,
            photo: photo ? photo.path : null // Adjust according to file handling logic
        });

        await newExecutive.save();
        res.status(201).json(newExecutive);
    } catch (error) {
        handleError(res, error);
    }
};

// Get All Executives
export const getAllExecutives = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const executives = await Executive.find();
        res.status(200).json(executives);
    } catch (error) {
        handleError(res, error);
    }
};

// Get Executive by ID
export const getExecutiveById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid Executive ID format' });
        }

        const executive = await Executive.findById(id);
        if (!executive) {
            return res.status(404).json({ message: 'Executive not found' });
        }
        res.status(200).json(executive);
    } catch (error) {
        handleError(res, error);
    }
};

// Update Executive
export const updateExecutive = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid Executive ID format' });
        }

        const updatedExecutive = await Executive.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatedExecutive) {
            return res.status(404).json({ message: 'Executive not found' });
        }
        res.status(200).json(updatedExecutive);
    } catch (error) {
        handleError(res, error);
    }
};

// Delete Executive
export const deleteExecutive = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid Executive ID format' });
        }

        const deletedExecutive = await Executive.findByIdAndDelete(id);
        if (!deletedExecutive) {
            return res.status(404).json({ message: 'Executive not found' });
        }
        res.status(200).json({ message: 'Executive deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
