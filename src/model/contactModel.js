const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contactModel", contactSchema);
