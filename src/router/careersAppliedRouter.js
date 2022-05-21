const router = require("express").Router();
const careersAppliedModel = require("../model/careersAppliedModel");

router.get("/get_careers_applied", async (req, res) => {
  try {
    res.send(await careersAppliedModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_careers_applied", async (req, res) => {
  try {
    new careersAppliedModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_careers_applied", async (req, res) => {
  try {
    await careersAppliedModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_careers_applied", async (req, res) => {
  try {
    careersAppliedModel.deleteOne({ _id: req.body._id }, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          message: "successfully Deleted",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
