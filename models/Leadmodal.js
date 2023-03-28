const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeadSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Date,
    default: Date.now,
    required: true,
  },
  pan: {
    type: String,
  },
  address: {
    type: String,
  },
  amount: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Lead = mongoose.model("leads", LeadSchema); //First para is used in notes mode for ref do can write 'Lead' also shown this name in database collection name
module.exports = Lead;
