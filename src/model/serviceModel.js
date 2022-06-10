const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    logo: String,
    title: String,
    image: String,
    shortDescription: String,
    description: String,
    categories: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ServiceModel", serviceSchema);
