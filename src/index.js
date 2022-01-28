const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const authRouter = require("./router/authRouter");
const newsLetterRouter = require("./router/newsLetterRouter");
const workRouter = require("./router/workRouter");
const projectRouter = require("./router/projectRouter");
const contactRouter = require("./router/contactRouter");
const serviceRouter = require("./router/serviceRouter");
const categoryRouter = require("./router/categoryRouter");

// api config
const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());

// db config
mongoose
  .connect(process.env.DBConncetionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
  });

// api endpoints
app.get("/", (req, res) => {
  res.json({
    message: "Hey welcome to dsmeglobal",
  });
});
app.use("/api/v1", authRouter);
app.use("/api/v1", newsLetterRouter);
app.use("/api/v1", workRouter);
app.use("/api/v1", projectRouter);
app.use("/api/v1", contactRouter);
app.use("/api/v1", serviceRouter);
app.use("/api/v1", categoryRouter);
// listner
app.listen(PORT, () => {
  console.log("api working");
});
