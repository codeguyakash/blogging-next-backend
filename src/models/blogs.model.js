import mongoose, { Schema } from "mongoose";
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    blogImage: {
      type: String,
      default: "post",
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
