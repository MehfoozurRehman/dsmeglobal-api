const mongoose = require("mongoose");

const techonologiesSchema = mongoose.Schema(
  {
    name: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("techonologiesModel", techonologiesSchema);
