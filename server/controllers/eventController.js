import Event  from "../models/events.js"

// Utility function for handling errors
const handleError = (res, error, statusCode = 500) => {
    console.error(error);
    res.status(statusCode).json({ message: error.message || 'Internal Server Error' });
};

// Utility function for handling success responses
const handleSuccess = (res, data, statusCode = 200) => {
    res.status(statusCode).json(data);
};

// Create Event
export const createEvent = async (req, res) => {
    try {
        const { title, venue, time } = req.body;

        const photo = req.file

        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate input
        if (!title || !venue || !time ) {
            return res.status(400).json({ message: 'Title, venue, time, and cover photo are required' });
        }

        const event = new Event({ title, venue, time, coverPhoto:photo ? photo.path :null });
        await event.save();
        handleSuccess(res, event, 201);
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
        handleSuccess(res, events);
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

        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid event ID format' });
        // }

        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        handleSuccess(res, event);
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

        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid event ID format' });
        // }

        // Validate input
        if (!updates.title || !updates.venue || !updates.time || !updates.coverPhoto) {
            return res.status(400).json({ message: 'Title, venue, time, and cover photo are required' });
        }

        const event = await Event.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        handleSuccess(res, event);
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

        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: 'Invalid event ID format' });
        // }

        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        handleSuccess(res, { message: 'Event deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
