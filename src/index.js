import "dotenv/config";
import cluster from "node:cluster";
import os from "os";
import { app } from "./app.js";
import connectDB from "./db/db.js";

const numCPUs = os.cpus().length;
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  connectDB();
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const PORT = process.env.PORT || 3000;
  app.get("/", (_, res) => {
    return res.json({
      projectName: "techlogs.tech",
      description: "A Blogging Website",
      serverConfig: `PID - ${process.pid} CPUs - (${numCPUs})`,
    });
  });
  app.listen(PORT, () =>
    console.log(
      `Server PID - ${process.pid} running on - http://localhost:${PORT}`
    )
  );
}
