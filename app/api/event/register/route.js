import { connectToDatabase } from "@/lib/mongodb";
import EventReg from "@/models/EventReg";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    let { eventCode, instituteID, pids } = await req.json();

    await connectToDatabase();
    await EventReg.create({
      eventCode,
      instituteID,
      pids,
    });

    return NextResponse.json(
      {
        message: "Registered for event Successfully",
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
