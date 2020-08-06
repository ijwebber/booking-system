var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
  title: { type: String, required: true },
  notes: { type: String },
  tutor: { type: mongoose.Types.ObjectId, ref: "Tutor" },
  student: { type: mongoose.Types.ObjectId, ref: "Student" },
  duration: { type: Number, required: true },
  startTime: { type: Date, required: true },
});

module.exports = mongoose.model("Session", sessionSchema);
