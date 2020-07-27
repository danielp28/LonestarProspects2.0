const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// should be done
const userSchema = new Schema({
  userId: { type: String, required: true },
  isCoach: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
