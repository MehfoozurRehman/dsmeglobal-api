const mongoose = require("mongoose");

const careersAppliedSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    position: String,
    department: Array,
    cv: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("careersAppliedModel", careersAppliedSchema);
