import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
app.get("/", (_, res) => {
  res.status(200).json({
    projectName: "TECHLOG.LOG",
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
