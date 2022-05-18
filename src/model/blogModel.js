const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: String,
    date: String,
    author: String,
    categories: Array,
    image: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blogModel", blogSchema);
