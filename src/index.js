import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/db.js";

const PORT = process.env.PORT || 5000;
app.get("/", (_, res) => {
  res.status(200).json({
    projectName: "techlogs.tech",
    description: "A Blogging Website",
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
