



// postSchema.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true,
    },
    postContent: {
        type: String,
        required: true,
    },
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;
