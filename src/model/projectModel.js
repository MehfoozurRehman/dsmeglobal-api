const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    banner: String,
    sliderImage: Array,
    theme: String,
    categories: Array,
    techonologies: Array,
    isOur: Array,
    url: String,
    description: String,
    quotation: String,
    quotationAuthor: String,
    quotationDesignation: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("projectModel", projectSchema);
