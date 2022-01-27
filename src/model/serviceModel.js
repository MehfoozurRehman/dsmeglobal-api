const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    logo: String,
    title: String,
    image: String,
    discription: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("serviceModel", serviceSchema);
