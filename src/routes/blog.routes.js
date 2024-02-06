import { Router } from "express";
import { upload } from "./../middlewares/multer.middleware.js";
import {
  getBlogs,
  createBlog,
  deteleBlog,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = Router();

router.route("/upload").post(upload.single("post"), createBlog);

router.route("/create").post(createBlog);
router.route("/blogs").get(getBlogs);
router.route("/update").put(updateBlog);
router.route("/delete").delete(deteleBlog);

export default router;
