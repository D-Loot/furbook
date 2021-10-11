const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
});

const Post = model('Post', postSchema);

module.exports = Post;
