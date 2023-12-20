import { Schema, model, models } from "mongoose";

// EventReg model
const eventRegObject = {
	eventCode: "",
	instituteID: "",
	emails: ["", "", "", "", "", ""],
};

const eventRegSchema = new Schema({
	eventCode: {
		type: String,
		required: [true, "Please provide an event code"],
	},
	instituteID: {
		type: String,
		required: [true, "Please provide an Institute ID"],
	},
	emails: {
		type: Array,
		required: [true, "Please provide team members"],
	},
	score: {
		type: Number,
		default: 0,
	},
});

const EventReg = models.EventReg || model("EventReg", eventRegSchema);
export default EventReg;
