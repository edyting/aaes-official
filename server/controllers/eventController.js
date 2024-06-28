import {Event} from '../models/events.js';

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Create Event
export const createEvent = async (req, res) => {
    try {
        const { name, description, date, location } = req.body;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate input
        if (!name || !date || !location) {
            return res.status(400).json({ message: 'Name, date, and location are required' });
        }

        const event = new Event({ name, description, date, location });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        handleError(res, error);
    }
};

// Get All Events
export const getAllEvents = async (req, res) => {
    try {

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        handleError(res, error);
    }
};

// Get Event by ID
export const getEventById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid event ID format' });
        // }

        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        handleError(res, error);
    }
};

// Update Event
export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid event ID format' });
        // }

        // Validate input
        if (!updates.name || !updates.date || !updates.location) {
            return res.status(400).json({ message: 'Name, date, and location are required' });
        }

        const event = await Event.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        handleError(res, error);
    }
};

// Delete Event
export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        
        // // Validate ID format
        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid event ID format' });
        // }

        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
