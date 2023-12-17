import User from "@/models/User";
import { NextResponse } from "next/server";
import sanitize from "mongo-sanitize";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import { getToken } from "@/lib/jwt";

export async function POST(req) {
  try {
    let { email, phone } = await req.json();

    email = sanitize(email).trim().toLowerCase();
    phone = sanitize(phone).trim();

    if (validator.isEmpty(email) || validator.isEmpty(phone)) {
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

    const match = phone === user.phone;

    if (!match) {
      return NextResponse.json(
        {
          message: "Wrong Phone Number",
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
