const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    logo: String,
    title: String,
    image: String,
    description: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("serviceModel", serviceSchema);
