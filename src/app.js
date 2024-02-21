import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

import blogRouter from "./routes/blog.routes.js";

app.use("/api/v1/", blogRouter);
app.use(bodyParser.json());

export { app };
