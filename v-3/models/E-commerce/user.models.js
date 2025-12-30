import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      lowecase: true,
    },
    e_mail: {
      type: String,
      unique: true,
      require: true,
      lowecase: true,
    },
    password: {
      type: String,
      require: true,
    },
    DOB: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
