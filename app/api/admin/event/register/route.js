import { NextResponse } from "next/server";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import { verifyToken } from "@/lib/jwt";
import EventReg from "@/models/EventReg";
import User from "@/models/User";

export async function POST(req) {
	try {
		let { eventCode, instituteID, emails, token } = await req.json();

		if (
			validator.isEmpty(eventCode) ||
			validator.isEmpty(instituteID) ||
			emails.length == 0
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

		for (let i = 0; i < emails.length; i++) {
			emails[i] = emails[i].trim();

			if (!validator.isEmail(emails[i])) {
				return NextResponse.json(
					{
						message: "Invalid email! - " + emails[i],
					},
					{
						status: 406,
					}
				);
			}
		}

		// check duplicate emails
		let uniqueEmails = [...new Set(emails)];
		if (uniqueEmails.length != emails.length) {
			return NextResponse.json(
				{
					message: "Duplicate emails found!",
				},
				{
					status: 406,
				}
			);
		}

		await connectToDatabase();

		for (let i = 0; i < emails.length; i++) {
			const user = await User.findOne({ email: emails[i] });
			if (!user) {
				return NextResponse.json(
					{
						message: "User " + emails[i] + " does not exist",
					},
					{
						status: 404,
					}
				);
			}
		}

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
			emails,
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
