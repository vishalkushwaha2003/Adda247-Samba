import jwt from "jsonwebtoken";
import User from "../Model/user.js";




async function createUser(req, res) {
  try {
    const data = req.body;
    
    // Check if the user already exists
    const exist = await User.findOne({ email: data.email });
    if (exist) {
      return res.status(400).json({ msg: "User already exists" });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { email: data.email },
      process.env.JWT_SECRET || "KDAHD WQPI[EMQWX8Y03M[JXHWUON32IMEY7DR23MXIRHPCEPER384[3NU/]'/'];/[/]/;//]=[]][=/]0908*)(&*%&^$**(&(9"
    );

    // Create the user with the token
    const user = await User.create({ ...data, token });
    if (!user) {
      return res.status(400).json({ msg: "User not created" });
    }

    // Set the cookie and respond with the user object
    res.cookie("token", token).status(200).json(user);
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ msg: err.message });
  }
}

async function getUser(req, res) {
  const { id } = req.params;

  if (id !== req.user._id.toString()) {
    return res.status(403).json({ msg: "Unauthorized access" });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}


async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }
    if (user.password != password) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { email: user.email },
      "KDAHD WQPI[EMQWX8Y03M[JXHWUON32IMEY7DR23MXIRHPCEPER384[3NU/]'/'];/[/]/;//]=[]][=/]0908*)(&*%&^$**(&(9"
    );
    res.cookie( "token", token ).status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
}


async function updateUser(req, res) {
  const { id } = req.params;

  if (id !== req.user._id.toString()) {
    return res.status(403).json({ msg: "Unauthorized access" });
  }

  try {
    const updates = req.body;

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true 
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ msg: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}


export { createUser, getUser , loginUser  , updateUser};
