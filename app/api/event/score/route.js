import { connectToDatabase } from "@/lib/mongodb";
import EventReg from "@/models/EventReg";
import { NextResponse } from "next/server";
import institutes from "@/data/institutes.json";

export async function POST(req) {
  try {
    let { eventCode } = await req.json();

    await connectToDatabase();

    if (eventCode === "all") {
      const eventReg = await EventReg.find({});
      const res = Object.keys(institutes).map((institute) => {
        let score = 0;
        eventReg.forEach((event) => {
          if (event.instituteID === institute) score += event.score;
        });
        return {
          institute,
          score,
        };
      });
      return NextResponse.json(res, {
        status: 200,
      });
    }

    // get sum of all scores where eventCode = eventCode
    const eventReg = await EventReg.find({
      eventCode: eventCode,
    });
    const res = eventReg.map((event) => {
      return {
        institute: event.instituteID,
        score: event.score,
      };
    });
    return NextResponse.json(res, {
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
