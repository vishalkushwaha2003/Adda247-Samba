import express from "express";
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import userRouter from "./Routes/user.js";
import authRouter from "./Routes/auth.js";
import dotenv from "dotenv";
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

try {
  mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("databsae connected");
  });
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Boilerplate with Cookie Parser!");
});

app.use("/auth", authRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
