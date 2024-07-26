import User from '../models/user.js';
import bcrypt from 'bcrypt';

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Register User
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });
        const salt = 10

        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        handleError(res, error);
    }
};

// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

        req.session.userId = user._id;
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        handleError(res, error);
    }
};

// Logout User
export const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) return handleError(res, err);
        res.clearCookie('connect.sid'); // clear the cookie
        res.status(200).json({ message: 'Logout successful' });
    });
};



