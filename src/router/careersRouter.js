const router = require("express").Router();
const careersModel = require("../model/careersModel");

router.get("/get_careers", async (req, res) => {
  try {
    res.send(await careersModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_careers", async (req, res) => {
  try {
    new careersModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_careers", async (req, res) => {
  try {
    await careersModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_careers", async (req, res) => {
  try {
    careersModel.deleteOne({ _id: req.body._id }, (err) => {
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

router.delete("/delete_all_careers", async (req, res) => {
  try {
    careersModel.deleteMany({}, (err) => {
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
