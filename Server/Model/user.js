import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Please fill a valid 10-digit phone number"],
    },
    alternatePhoneNumber: {
      type: String,
      match: [/^\d{10}$/, "Please fill a valid 10-digit phone number"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please fill a valid email address"],
    },
    fathersName: {
      type: String,
      required: true,
      trim: true,
    },
    fathersOccupation: {
      type: String,
      trim: true,
    },
    mothersName: {
      type: String,
      required: true,
      trim: true,
    },
    mothersOccupation: {
      type: String,
      trim: true,
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
