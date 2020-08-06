var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
  title: { type: String, required: true },
  notes: { type: String },
  tutor: { type: mongoose.Types.ObjectId, ref: "Tutor", required: true },
  student: { type: mongoose.Types.ObjectId, ref: "Student", required: true },
  duration: { type: Number, required: true },
  startTime: { type: Date, required: true },
});

module.exports = mongoose.model("Session", sessionSchema);
