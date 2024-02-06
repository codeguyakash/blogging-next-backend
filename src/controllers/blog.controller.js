import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Blogs } from "../models/blogs.model.js";

const getBlogs = async (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    data: data,
    message: "getblogs",
  });
};

// ---------------------------------------------------------------------------------------------------
const createBlog = async (req, res) => {
  const { title, content, author, tags, keywords, category, comments, post } =
    req.body;
  const blogPostLocalPath = req.file?.path;

  if (!blogPostLocalPath) {
    throw new Error(400, "Post Required");
  }

  const blogPost = await uploadOnCloudinary(blogPostLocalPath);

  return;

  const blog = await Blogs.create({
    title,
    post: blogPost.url,
    content,
    author,
    tags,
    keywords,
    category,
    comments,
  });
  console.log("first");
  res.status(200).json(blog);
};

// ---------------------------------------------------------------------------------------------------

const deteleBlog = async (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    data: data,
    message: "deleteblogs",
  });
};
const updateBlog = async (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    data: data,
    message: "updateblogs",
  });
};

export { getBlogs, createBlog, deteleBlog, updateBlog };
