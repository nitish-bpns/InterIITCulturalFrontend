import { Schema, model, models } from "mongoose";

// User model
const userObject = {
	pid: "",
	name: "",
	email: "",
	phone: "",
	gender: "",
	instituteID: "",
	hall: "",
	mess: "",
	isAdmin: false,
	otp: "",
};

const userSchema = new Schema({
	pid: {
		type: String,
		required: [true, "Please provide a pid"],
		unique: true,
	},
	name: {
		type: String,
		required: [true, "Please provide a name"],
	},
	email: {
		type: String,
		required: [true, "Please provide an email"],
		unique: true,
	},
	phone: {
		type: String,
		required: [true, "Please provide a phone number"],
	},
	gender: {
		type: String,
		required: [true, "Please provide a gender"],
	},
	instituteID: {
		type: String,
		required: [true, "Please provide an Institute ID"],
	},
	hall: {
		type: String,
	},
	mess: {
		type: String,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	otp: {
		type: String,
		default: "",
	},
});

const User = models.User || model("User", userSchema);
export default User;
