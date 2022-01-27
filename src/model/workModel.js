const mongoose = require("mongoose");

const workSchema = mongoose.Schema(
  {
    logo: String,
    image: String,
    company: String,
    title: String,
    discription: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("workModel", workSchema);
