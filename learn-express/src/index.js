import express from "express";
import router from "./routes";
import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config(); // .env 파일을 읽는다.

const mongoURL = process.env.MONGODB_URL;

mongoose
  .connect(mongoURL)
  .then(() => console.log("connected MongoDB"))
  .catch((e) => console.log(e));

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json()); // json parser 미들웨어 등록

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.use(router);

app.listen(8000, () => {
  console.log("Sever is listening on PORT : 8000");
});
