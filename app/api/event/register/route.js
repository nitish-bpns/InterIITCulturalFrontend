import { NextResponse } from "next/server";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import EventReg from "@/models/EventReg";
import { verifyToken } from "@/lib/jwt";

export async function POST(req) {
	try {
		let { eventCode, instituteID, pids, token } = await req.json();

		if (
			validator.isEmpty(eventCode) ||
			validator.isEmpty(instituteID) ||
			pids.length == 0
		) {
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

		const adminUser = await verifyToken(token);
		if (!adminUser.isAdmin) {
			return NextResponse.json(
				{
					message: "You are not authorized to perform this action!",
				},
				{
					status: 401,
				}
			);
		}

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
