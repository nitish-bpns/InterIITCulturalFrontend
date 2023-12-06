import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    let { name, email, password } = await req.json();

    password = await bcrypt.hash(password, 10);

    await connectToDatabase();
    await User.create({
      name,
      email,
      password,
    });

    return NextResponse.json(
      {
        message: "User Created Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: error.message || "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
