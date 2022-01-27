const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    categories: Array,
    isOur: Boolean,
    url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("projectModel", projectSchema);
