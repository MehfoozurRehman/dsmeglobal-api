const router = require("express").Router();
const workModel = require("../model/workModel");

router.get("/get_work", async (req, res) => {
  try {
    res.send(await workModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_work", async (req, res) => {
  try {
    await new workModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_work", async (req, res) => {
  try {
    await workModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_work", async (req, res) => {
  try {
    workModel.deleteOne({ _id: req.body._id }, (err) => {
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

router.delete("/delete_work", async (req, res) => {
  try {
    workModel.deleteOne({ _id: req.body._id }, (err) => {
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
