const mongoose = require("mongoose");

// Define the schema for a blog post
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  keywords: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      user: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      caption: String,
    },
  ],
});

// Create a Blog model using the schema
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
