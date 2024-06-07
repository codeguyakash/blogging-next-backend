import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/db.js";

const PORT = process.env.PORT || 5000;
app.get("/api/v1/name", (_, res) => {
  res.status(200).json({
    projectName: "Techlogs.tech: Your Gateway to Tech Insights",
    description:
      "Techlogs simplifies tech blogging, offering a streamlined platform to share and explore the latest in technology. Dive into insightful articles, connect with fellow enthusiasts, and stay ahead of the curve. Your tech journey starts here",
  });
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀🚀 Server Running... on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`DB - Connection Error`, error);
  });
