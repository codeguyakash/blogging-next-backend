import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { upload } from "./middlewares/multer.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());


/********--import--routes--here--************************/
import blogRouter from "./routes/blog.routes.js";

/*********--routes--declaration--here--******************/
app.use("/api/v1/", blogRouter);

export { app };
