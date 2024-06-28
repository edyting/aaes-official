import Executive from '../models/executive.js'; // Fixed the model import

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Create Executive
export const createExecutive = async (req, res) => {
    try {
        const { name, position, bio, contanct } = req.body;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate input
        if (!name || !position ) {
            return res.status(400).json({ message: 'Name, position are required' });
        }

        const Executive = new Executive({ name, position, bio, contanct });
        await Executive.save();
        res.status(201).json(Executive);
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
        const Executives = await Executive.find();
        res.status(200).json(Executives);
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
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid Executive ID format' });
        // }

        const Executive = await Executive.findById(id);
        if (!Executive) {
            return res.status(404).json({ message: 'Executive not found' });
        }
        res.status(200).json(Executive);
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
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid Executive ID format' });
        // }

        // Validate input
        if (!updates.name || !updates.date || !updates.location) {
            return res.status(400).json({ message: 'Name, date, and location are required' });
        }

        const Executive = await Executive.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!Executive) {
            return res.status(404).json({ message: 'Executive not found' });
        }
        res.status(200).json(Executive);
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

        // // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid Executive ID format' });
        // }

        const Executive = await Executive.findByIdAndDelete(id);
        if (!Executive) {
            return res.status(404).json({ message: 'Executive not found' });
        }
        res.status(200).json({ message: 'Executive deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
