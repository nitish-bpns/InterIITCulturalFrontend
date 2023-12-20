import User from "@/models/User";
import { NextResponse } from "next/server";
import sanitize from "mongo-sanitize";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import { getToken } from "@/lib/jwt";
import sendEmail from "@/lib/nodemailer";

export async function POST(req) {
	try {
		req = await req.json();

		let { email } = req;
		email = sanitize(email).trim().toLowerCase();
		if (validator.isEmpty(email)) {
			return NextResponse.json(
				{
					message: "Email Address is required!",
				},
				{
					status: 406,
				}
			);
		}

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

		const { step } = req;
		if (step == 1) {
			const otp = Math.floor(100000 + Math.random() * 900000);
			user.otp = otp;
			await user.save();

			await sendEmail(
				user.email,
				"OTP for Login",
				"",
				`<p>Your OTP for login is <strong>${otp}</strong>. This OTP is valid for 5 minutes. Please do not share this OTP with anyone.</p>`
			);

			return NextResponse.json(
				{
					message: "OTP sent to your registered email address",
				},
				{
					status: 201,
				}
			);
		} else if (step == 2) {
			let { otp } = req;
			otp = sanitize(otp).trim();
			if (validator.isEmpty(otp)) {
				return NextResponse.json(
					{
						message: "OTP is required!",
					},
					{
						status: 406,
					}
				);
			}
			if (user.otp != otp) {
				return NextResponse.json(
					{
						message: "Incorrect OTP!",
					},
					{
						status: 401,
					}
				);
			}

			user.otp = null;
			await user.save();

			return NextResponse.json(
				{
					message: "Logged in successfully",
					token: getToken(user.email),
				},
				{
					status: 200,
				}
			);
		}
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
