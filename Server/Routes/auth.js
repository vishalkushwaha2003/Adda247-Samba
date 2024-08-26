import express from "express";
import { createUser, loginUser } from "../Controller/user.js";

const router = express.Router(); // Corrected 'router' to 'Router'

router.post("/register", createUser).post("/login", loginUser);

export default router;
