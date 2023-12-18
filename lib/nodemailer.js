import { createTransport } from "nodemailer";

export default async function sendEmail(to, subject, text, html) {
	const transporter = createTransport({
		service: "gmail",
		auth: {
			user: "interiitcultural6@gmail.com",
			pass: "oavb card nrpk oakx",
		},
	});

	const mailOptions = {
		from: "Inter IIT Cultural Meet 6.0 <interiitcultural6@gmail.com>",
		to,
		subject,
		text,
		html,
	};

	const info = await transporter.sendMail(mailOptions);
	return info;
}
