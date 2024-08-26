import jsonwebtoken from "jsonwebtoken";
import User from "../Model/user.js"
import express from "express";

async function isAuthienticated(req , res , next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "No token provided." });
    }
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(403).json({ message: "Invalid token." });
        }
        const user =  await  User.find({email : email});
        if(!user){
            return res.status(403).json({ message: "Invalid user." });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token." });
    }
}

export {isAuthienticated};