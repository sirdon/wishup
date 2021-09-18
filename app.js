import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import config from "./config.js";

const app = express();
app.use(express.json()); // to parse incomming req
app.use(morgan("tiny")); // log req and res time
dotenv.config();

app.listen(3000, () => {
  console.log("server listing at 3000");
});

mongoose.connect(
  config.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDb");
  }
);
