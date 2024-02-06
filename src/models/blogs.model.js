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
  },
  { timestamps: true }
);

export const Blogs = mongoose.model("Blogs", blogShema);
