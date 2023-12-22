import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { verifyToken } from "@/lib/jwt";
import EventReg from "@/models/EventReg";

export async function POST(req) {
	const { token, id } = await req.json();
	try {
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
		if (!id || id.length !== 24) {
			return NextResponse.json(
				{
					message: "Please provide a valid id!",
				},
				{
					status: 404,
				}
			);
		}

		let reg = await EventReg.findOne(new ObjectId(id));
		if (!reg) {
			return NextResponse.json(
				{
					message: "No event registration found with this email!",
				},
				{
					status: 404,
				}
			);
		}
		return NextResponse.json(
			{ reg },
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
