const router = require("express").Router();
const quoteModel = require("../model/quoteModel");

router.get("/get_quote", async (req, res) => {
  try {
    res.send(await quoteModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_quote", async (req, res) => {
  try {
    new quoteModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_quote", async (req, res) => {
  try {
    quoteModel.deleteOne({ _id: req.body._id }, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          message: "Successfully Deleted",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_all_quote", async (req, res) => {
  try {
    quoteModel.deleteMany({}, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          message: "Successfully Deleted All",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
