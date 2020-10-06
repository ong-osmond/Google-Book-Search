const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  contactNumber: Number,
  homeAddress: String
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
