import express from "express";
import cookieParser from "cookie-parser";
import { isAuthenticated } from "./Middlewares/middleware.js";
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
// const  pass= rE0I6wq64Z7w2xh3
try {
  mongoose
    .connect(
      "mongodb://vishal2003kushwaha:rE0I6wq64Z7w2xh3@cluster0-shard-00-00.i7sg8.mongodb.net:27017,cluster0-shard-00-01.i7sg8.mongodb.net:27017,cluster0-shard-00-02.i7sg8.mongodb.net:27017/?ssl=true&replicaSet=atlas-6s7bst-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("databsae connected");
    });
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Boilerplate with Cookie Parser!");
});

app.use("/auth", authRouter);
app.use("/user", isAuthenticated, userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
