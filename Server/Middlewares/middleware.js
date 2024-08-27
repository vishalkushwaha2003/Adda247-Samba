import jwt from "jsonwebtoken";
import User from "../Model/user.js"
import express from "express";

async function isAuthenticated(req, res, next) {
    const token = req.cookies.token; 
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "KDAHD WQPI[EMQWX8Y03M[JXHWUON32IMEY7DR23MXIRHPCEPER384[3NU/]'/'];/[/]/;//]=[]][=/]0908*)(&*%&^$**(&(9"
      );
      const { email } = decoded;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(403).json({ message: "Invalid user." });
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(403).json({ message: error.message });
    }
  }
  

export {isAuthenticated};