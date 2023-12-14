import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import { getToken } from "@/lib/jwt";
import User from "@/models/User";

export async function POST(req) {
  try {
    let { pid, name, email, password, phone, gender, instituteID, hall, mess } =
      await req.json();

    const emailExists = await User.find({ email: email });
    if (emailExists.length >= 1) {
      return NextResponse.json(
        {
          message: "A registration with this email already exists!",
        },
        {
          status: 406,
        }
      );
    }

    const pidExists = await User.find({ pid: pid });
    if (pidExists.length >= 1) {
      return NextResponse.json(
        {
          message: "A registration with this PID already exists!",
        },
        {
          status: 406,
        }
      );
    }

    password = await bcrypt.hash(password, 10);

    await connectToDatabase();
    await User.create({
      pid,
      name,
      email,
      password,
      phone,
      gender,
      instituteID,
      hall,
      mess,
    });

    return NextResponse.json(
      {
        message: "User Created Successfully",
        token: getToken(pid),
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
