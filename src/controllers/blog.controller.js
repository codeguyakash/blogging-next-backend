import { Blog } from "../models/blogs.model.js";
// import cloudinary from "cloudinary";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getBlogsById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const blogPostfilePath = req.file.path;

  //upload files on cloudinary
  try {
    const blogPostUrl = await uploadOnCloudinary(blogPostfilePath);

    if (!blogPostUrl.url) {
      throw new Error("Post Required");
    }
    const blogs = await Blog.create({
      title,
      content,
      blogImage: `${blogPostUrl.url}`,
    });
    res.status(201).json(blogs);
  } catch (error) {
    console.log(error);
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

export { getBlogs, createBlog, deteleBlog, updateBlog, getBlogsById };
