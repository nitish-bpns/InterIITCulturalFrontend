import User from "@/models/User";
import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import sanitize from "mongo-sanitize";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import { getToken } from "@/lib/jwt";

export async function POST(req) {
  try {
    let { email, password } = await req.json();

    email = sanitize(email).trim().toLowerCase();
    password = sanitize(password).trim();

    if (validator.isEmpty(email) || validator.isEmpty(password)) {
      return NextResponse.json(
        {
          message: "All fields are required!",
        },
        {
          status: 406,
        }
      );
    }

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
    return NextResponse.json(
      {
        message: "Logged in successfully",
        token: getToken(user.pid),
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
