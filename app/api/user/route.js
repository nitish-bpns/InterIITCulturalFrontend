import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import EventReg from "@/models/EventReg";
import { verifyToken } from "@/lib/jwt";

export async function POST(req) {
  const { token } = await req.json();
  try {
    const user = await verifyToken(token);
    await connectToDatabase();
    const events = await EventReg.find({ pids: { $in: [user.pid] } });
    return NextResponse.json(
      { user, events },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 401,
      }
    );
  }
}
