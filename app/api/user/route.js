import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import EventReg from "@/models/EventReg";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { email } = await req.json();
    const user = await User.findOne({ email });

    const events = await EventReg.find({ pids: { $in: [user.pid] } });

    return NextResponse.json({ user, events });
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
