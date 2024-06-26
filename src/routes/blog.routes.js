import { Router } from "express";
import { upload } from "./../middlewares/multer.middleware.js";
import {
  getBlogs,
  createBlog,
  deteleBlog,
  updateBlog,
  getBlogsById,
} from "../controllers/blog.controller.js";

const router = Router();

router.route("/blogs").get(getBlogs);
router.route("/blog/:id").get(getBlogsById);
router.route("/create").post(upload.single("blogImage"), createBlog);
router.route("/:id").put(updateBlog);
router.route("/:id").delete(deteleBlog);

export default router;
