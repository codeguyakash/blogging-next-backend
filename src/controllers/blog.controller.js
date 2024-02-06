const getBlogs = async (req, res) => {
  res.status(200).json({
    blogs: "get blogs",
  });
};
const createBlog = async (req, res) => {
  res.status(200).json({
    blogs: "create blogs",
  });
};
const deteleBlog = async (req, res) => {
  res.status(200).json({
    blogs: "delete blogs",
  });
};
const updateBlog = async (req, res) => {
  res.status(200).json({
    blogs: "update blogs",
  });
};

export { getBlogs, createBlog, deteleBlog, updateBlog };
