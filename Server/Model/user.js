import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    alternatePhoneNumber: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fathersName: {
      type: String,
      required: true,
    },
    fathersOccupation: {
      type: String,
    },
    mothersName: {
      type: String,
      required: true,
    },
    mothersOccupation: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
