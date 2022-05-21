const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const authRouter = require("./router/authRouter");
const newsLetterRouter = require("./router/newsLetterRouter");
const workRouter = require("./router/workRouter");
const projectRouter = require("./router/projectRouter");
const contactRouter = require("./router/contactRouter");
const serviceRouter = require("./router/serviceRouter");
const categoryRouter = require("./router/categoryRouter");
const clientRouter = require("./router/clientRouter");
const blogRouter = require("./router/blogRouter");
const techonologiesRouter = require("./router/techonologiesRouter");
const careersRouter = require("./router/careersRouter");

// api config
const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(fileUpload());

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

app.post("/upload", function (req, res) {
  const image = req.files.image;
  const logo = req.files.logo;

  if (req.files.logo) {
    logo.mv(`public/${logo.name}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    image.mv(`public/${image.name}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
app.use("/api/v1", authRouter);
app.use("/api/v1", newsLetterRouter);
app.use("/api/v1", workRouter);
app.use("/api/v1", projectRouter);
app.use("/api/v1", contactRouter);
app.use("/api/v1", serviceRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", clientRouter);
app.use("/api/v1", blogRouter);
app.use("/api/v1", techonologiesRouter);
app.use("/api/v1", careersRouter);
// listner
app.listen(PORT, () => {
  console.log("api working");
});
