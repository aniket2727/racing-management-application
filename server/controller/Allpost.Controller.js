


// postController.js
const PostModel = require('../database/postSchema');

// Controller to create a new post
const createPost = async (req, res) => {
    try {
        const postData = req.body;
        const newPost = await PostModel.create(postData);
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller to get posts by email
const getPostsByEmail = async (req, res) => {
    try {
        const userEmail = req.params.email;
        const posts = await PostModel.find({ email: userEmail });

        if (posts.length === 0) {
            return res.status(404).json({ error: 'No posts found for the given email.' });
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller to get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createPost, getPostsByEmail, getAllPosts };
