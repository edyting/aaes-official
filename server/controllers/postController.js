import {Post} from '../models/post.js';

// Utility function for handling errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
};

// Create Post
export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Check if user is logged in
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate input
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const post = new Post({
            title,
            content,
            author: req.session.userId // Set the author as the current logged-in user
        });

        await post.save();
        res.status(201).json(post);
    } catch (error) {
        handleError(res, error);
    }
};

// Get All Posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.status(200).json(posts);
    } catch (error) {
        handleError(res, error);
    }
};

// Get Post by ID
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid post ID format' });
        }

        const post = await Post.findById(id).populate('author', 'username');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        handleError(res, error);
    }
};

// Update Post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Check if user is logged in
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid post ID format' });
        }

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if the logged-in user is the author of the post
        if (post.author.toString() !== req.session.userId) {
            return res.status(403).json({ message: 'User not authorized to update this post' });
        }

        // Validate input
        if (!updates.title || !updates.content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const updatedPost = await Post.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        handleError(res, error);
    }
};

// Delete Post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if user is logged in
        if (!req.session.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid post ID format' });
        }

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if the logged-in user is the author of the post
        if (post.author.toString() !== req.session.userId) {
            return res.status(403).json({ message: 'User not authorized to delete this post' });
        }

        await post.remove();
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
