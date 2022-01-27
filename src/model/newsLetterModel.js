const mongoose = require("mongoose");

const newsLetterSchema = mongoose.Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("newsLetterModel", newsLetterSchema);
