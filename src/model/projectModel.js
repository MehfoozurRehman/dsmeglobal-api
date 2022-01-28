const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    categories: Array,
    isOur: Array,
    url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("projectModel", projectSchema);
