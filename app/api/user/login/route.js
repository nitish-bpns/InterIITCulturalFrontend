import User from "@/models/User";
import { NextResponse } from "next/server";
import sanitize from "mongo-sanitize";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import { getToken } from "@/lib/jwt";

export async function POST(req) {
	try {
		req = await req.json();

		let { email, phone } = req;

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

		email = sanitize(email).trim();
		phone = sanitize(phone).trim();

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

		if (user.phone != phone) {
			return NextResponse.json(
				{
					message: "Phone number does not match",
				},
				{
					status: 401,
				}
			);
		}

		return NextResponse.json(
			{
				message: "Logged in successfully",
				token: getToken(user.email),
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
