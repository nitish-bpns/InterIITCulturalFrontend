import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import EventReg from "@/models/EventReg";
import { verifyToken } from "@/lib/jwt";
import User from "@/models/User";

export async function POST(req) {
	const { token, email } = await req.json();
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

		const user = await User.findOne({ email: email });
		if (!user) {
			return NextResponse.json(
				{
					message: "No user found with this email!",
				},
				{
					status: 404,
				}
			);
		}

		const events = await EventReg.find({ emails: { $in: [user.email] } });
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
