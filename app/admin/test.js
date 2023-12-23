const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
	username: "api",
	key:
		process.env.MAILGUN_API_KEY ||
		"4a50a128298699e5d7350b173d43c6e9-5e3f36f5-608e5155",
});

const domain = "sandboxfc323070e8ad4f22a5466f552f25ae0b.mailgun.org";
const fromEmail =
	"Inter IIT Cultural Admin <mailgun@sandboxfc323070e8ad4f22a5466f552f25ae0b.mailgun.org>";
const toEmails = ["interiitcultural6@gmail.com"];

(async () => {
	try {
		const otp = "123456";
		const sendResult = await mg.messages.create(domain, {
			from: fromEmail,
			to: toEmails,
			subject: "Hello",
			html: `<p>Your OTP for login is <strong>${otp}</strong>. This OTP is valid for 5 minutes. Please do not share this OTP with anyone.</p>`,
			// text: "Testing some Mailgun awesomness!",
		});
		console.log(sendResult);
	} catch (error) {
		console.error(error);
	}
})();
