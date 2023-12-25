import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { verifyToken } from "@/lib/jwt";
import User from "@/models/User";

export async function POST(req) {
	const { token, instituteID, hall, mess } = await req.json();
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

		const users = await User.find({
			instituteID: instituteID,
			hall: { $regex: hall, $options: "i" },
		});

		const count = users.length;

		// const del = await User.deleteMany({
		// 	instituteID: instituteID,
		// 	hall: { $regex: hall, $options: "i" },
		// });

		for (let i = 0; i < count; i++) {
			users[i].mess = mess;
			await users[i].save();
		}

		return NextResponse.json(
			{ count, users },
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
