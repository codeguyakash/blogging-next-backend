import { Blog } from "../models/blogs.model.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const filePath = req.file;
  try {
    const blogs = await Blog.create({
      title,
      content,
      blogImage: `${filePath.path}`,
    });
    res.status(201).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const updateBlog = {
    title: title,
    content: content,
  };
  try {
    const blogs = await Blog.findByIdAndUpdate(id, updateBlog, { new: true });
    res.status(201).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deteleBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogs = await Blog.findByIdAndDelete(id);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getBlogs, createBlog, deteleBlog, updateBlog };
