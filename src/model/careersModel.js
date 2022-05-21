const mongoose = require("mongoose");

const careersSchema = mongoose.Schema(
  {
    position: String,
    description: String,
    requirements: String,
    department: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("careersModel", careersSchema);
