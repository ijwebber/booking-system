var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  isStudent: { type: Boolean, required: true },
  dateCreated: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
