const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    name: String,
    logo: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("clientModel", clientSchema);
