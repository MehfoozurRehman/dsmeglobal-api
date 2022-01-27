const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const newsLetterRouter = require("./router/newsLetterRouter");
const workRouter = require("./router/workRouter");
const projectRouter = require("./router/projectRouter");
const contactRouter = require("./router/contactRouter");
const serviceRouter = require("./router/serviceRouter");

// api config
const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());

// db config
mongoose.connect(process.env.DBConncetionURL);

// api endpoints
app.get("/", (req, res) => {
  res.json({
    message: "Hey welcome to dsmeglobal",
  });
});
app.get("/api/v1/get_our_work", (req, res) => {
  res.json({
    message: "Hey welcome to dsmeglobal",
  });
});
app.use("/api/v1", newsLetterRouter);
app.use("/api/v1", workRouter);
app.use("/api/v1", projectRouter);
app.use("/api/v1", contactRouter);
app.use("/api/v1", serviceRouter);
// listner
app.listen(PORT, () => {
  console.log("api working");
});
