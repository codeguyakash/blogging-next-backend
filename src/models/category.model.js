import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    categorys: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
  },
  { timestamps: true }
);
export const Category = mongoose.model("Category", categorySchema);
