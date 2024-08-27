import express from "express";
import { getUser } from "../Controller/user.js";
const router = express.Router();

router.get("/getUser/:id" , getUser).post("/updateUser" , )


export default router;