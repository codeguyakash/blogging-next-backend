import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

/********--import--routes--here--************************/
import blogRouter from "./routes/blog.routes.js";

/*********--routes--declaration--here--******************/
app.use("/api/v1/", blogRouter);

export { app };
