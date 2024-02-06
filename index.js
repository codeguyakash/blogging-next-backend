import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (_, res) => {
  res.status(200).json([
    {
      projectName: "Techlog.tech",
      description: "A Blogging Website",
    },
  ]);
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`DB - Connection Error`, error);
  });
