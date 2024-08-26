import jsonwebtoken from "jsonwebtoken";
import User from "../Model/user.js";
async function createUser(req, res) {
  try {
    const data = req.body;
    const token = jwt.sign(
      { email: data.email },
      "KDAHD WQPI[EMQWX8Y03M[JXHWUON32IMEY7DR23MXIRHPCEPER384[3NU/]'/'];/[/]/;//]=[]][=/]0908*)(&*%&^$**(&(9"
    );
    const user = await User.create({ data, token });
    if (!user) {
      return res.status(400).json({ msg: "User not created" });
    }

    res.cookie({ token: token }).status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}

async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.find({ _id: id });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    if(id !=user._id){
        return res.status(403).json({ msg: "Unauthorized Access" });   
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err });
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
    res.cookie({ token: token }).status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
}

export { createUser, getUser , loginUser };
