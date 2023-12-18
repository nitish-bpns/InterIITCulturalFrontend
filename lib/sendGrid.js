import { setApiKey, send } from "@sendgrid/mail";

setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendMail(
	to = "interiitcultural6@gmail.com",
	from = "interiitcultural6@gmail.com",
	subject = "Mail from Inter IIT Cultural Meet 6.0",
	text = "",
	html = ""
) {
	try {
		await send({
			to,
			from,
			subject,
			text,
			html,
		});
	} catch (error) {
		console.error(error);
		if (error.response) {
			console.error(error.response.body);
		}
	}
}
