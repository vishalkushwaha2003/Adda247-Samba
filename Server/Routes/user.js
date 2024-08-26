import express from "express";
import { getUser } from "../Controller/user.js";
import { isAuthienticated } from "../Middlewares/middleware.js";
const router = express.Router();

router.get("/getUser/:id" , isAuthienticated , getUser)


export default router;