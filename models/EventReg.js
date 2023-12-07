import { Schema, model, models } from "mongoose";

// EventReg model
const eventRegObject = {
  eventID: "",
  instituteID: "",
  pids: ["", "", "", "", "", ""],
};

const eventRegSchema = new Schema({
  eventID: {
    type: String,
    required: [true, "Please provide an eventID"],
  },
  instituteID: {
    type: String,
    required: [true, "Please provide an Institute ID"],
  },
  pids: {
    type: Array,
    required: [true, "Please provide a team"],
  },
});

const EventReg = models.EventReg || model("EventReg", eventRegSchema);
export default EventReg;
