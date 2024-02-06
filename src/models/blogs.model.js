import mongoose, { Schema } from "mongoose";
const blogShema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    comments: [
      {
        user: {
          type: String,
          required: false,
        },
        text: {
          type: String,
          required: false,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    post: {
      type: String, // cloudinary url
      required: true,
    },
  },
  { timestamps: true }
);

export const Blogs = mongoose.model("Blogs", blogShema);
