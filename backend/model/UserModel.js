const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // In production, always hash this
  email: { type: String, required: true, unique: true }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
