import User from "@/models/User";
import { NextResponse } from "next/server";
import sanitize from "mongo-sanitize";
import validator from "validator";
import { connectToDatabase } from "@/lib/mongodb";
import { getToken } from "@/lib/jwt";
// import { sendMail } from "@/lib/sendGrid";

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

			// Send OTP to user's email address
			// await sendMail(
			// 	(to = user.email),
			// 	(subject = "OTP for Inter IIT Cultural Meet 6.0 Website"),
			// 	(text = `Your OTP is ${otp}. Please do not share this with anyone.`)
			// );

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
					token: getToken(user.pid),
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
