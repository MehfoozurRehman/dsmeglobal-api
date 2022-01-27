const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userModel", userSchema);
