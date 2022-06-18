const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    service: String,
    budget: String,
    phone: String,
    subject: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("quoteModel", quoteSchema);
