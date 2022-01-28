const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("categoryModel", categorySchema);
