import { NextResponse } from "next/server";
import sanitize from "mongo-sanitize";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import { getToken, verifyToken } from "@/lib/jwt";
import User from "@/models/User";

export async function POST(req) {
	try {
		let {
			pid,
			name,
			email,
			phone,
			gender,
			instituteID,
			hall,
			mess,
			token,
		} = await req.json();

		pid = sanitize(pid).trim();
		name = sanitize(name).trim();
		email = sanitize(email).trim().toLowerCase();
		phone = sanitize(phone).trim();
		gender = sanitize(gender).trim();
		instituteID = sanitize(instituteID).trim();
		hall = sanitize(hall).trim();
		mess = sanitize(mess).trim();

		if (
			validator.isEmpty(pid) ||
			validator.isEmpty(name) ||
			validator.isEmpty(email) ||
			validator.isEmpty(phone) ||
			validator.isEmpty(gender) ||
			validator.isEmpty(instituteID)
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

		if (!validator.isEmail(email)) {
			return NextResponse.json(
				{
					message: "Invalid email!",
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

		await User.create({
			pid,
			name,
			email,
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
