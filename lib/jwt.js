import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectToDatabase } from "./mongodb";

// Make JWT Token
export const getToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET);
};

// Verify JWT Token
export const verifyToken = async (token) => {
  if (!token) {
    throw new Error("Token not found");
  }
  try {
    await connectToDatabase();
    const pid = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ pid });
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Invalid token");
  }
};
