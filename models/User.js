import { Schema, model, models } from "mongoose";

// User model
const userObject = {
  pid: "",
  name: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  instituteID: "",
  hall: "",
  mess: "",
};

const userSchema = new Schema({
  pid: {
    type: String,
    required: [true, "Please provide a pid"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
  gender: {
    type: String,
    required: [true, "Please provide a gender"],
  },
  instituteID: {
    type: String,
    required: [true, "Please provide an Institute ID"],
  },
  hall: {
    type: String,
  },
  mess: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);
export default User;
