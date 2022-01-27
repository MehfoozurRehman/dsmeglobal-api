const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// api config
const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express());
app.use(cors());

// db config
mongoose.connect(process.env.DBConncetionURL);

// api endpoints
app.get("/", (req, res) => {
  res.json({
    message: "Hey welcome to dsmeglobal",
  });
});
// listner
app.listen(PORT, () => {
  console.log("api working");
});
