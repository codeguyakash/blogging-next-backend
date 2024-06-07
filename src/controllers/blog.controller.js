import { Blog } from "../models/blogs.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Fetch all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Fetch blog by ID
const getBlogsById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const blogPostfilePath = req.file.path;

  try {
    const blogPostUrl = await uploadOnCloudinary(blogPostfilePath);

    if (!blogPostUrl.url) {
      throw new Error("Post image upload failed");
    }

    const newBlog = await Blog.create({
      title,
      content,
      blogImage: blogPostUrl.url,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Update an existing blog
const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Delete a blog
const deteleBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

export { getBlogs, createBlog, deteleBlog, updateBlog, getBlogsById };
