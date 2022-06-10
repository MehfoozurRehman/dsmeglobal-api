const router = require("express").Router();
const techonologiesModel = require("../model/techonologiesModel");

router.get("/get_techonologies", async (req, res) => {
  try {
    res.send(await techonologiesModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_techonologies", async (req, res) => {
  try {
    new techonologiesModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_techonologies", async (req, res) => {
  try {
    await techonologiesModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_techonologies", async (req, res) => {
  try {
    techonologiesModel.deleteOne({ _id: req.body._id }, (err) => {
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
router.delete("/delete_all_techonologies", async (req, res) => {
  try {
    techonologiesModel.deleteMany({}, (err) => {
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
