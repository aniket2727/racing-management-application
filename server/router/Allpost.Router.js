// postRouter.js
const express = require('express');
const router = express.Router();
const postController = require('../controller/Allpost.Controller');
const authenticateToken = require('../middleware/autherization');

// Use the authentication middleware for all post routes
router.use(authenticateToken);

// Route to create a new post
router.post('/posts', postController.createPost);

// Route to get posts by user's email
router.get('/posts/:email', postController.getPostsByEmail);

// Route to get all posts
router.get('/posts', postController.getAllPosts);

module.exports = router;
