import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { compare } from "bcryptjs";

export async function POST(req) {
  try {
    let { email, password } = await req.json();
    await connectToDatabase();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User does not exist",
        },
        {
          status: 404,
        }
      );
    }

    const match = await compare(password, user.password);
    if (!match) {
      return NextResponse.json(
        {
          message: "Invalid Password",
        },
        {
          status: 401,
        }
      );
    }
    return NextResponse.json(user, {
      status: 200,
    });
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
