const mongoose = require("mongoose");

const techonologiesSchema = mongoose.Schema(
  {
    name: String,
    icon: String,
    image: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("techonologiesModel", techonologiesSchema);
