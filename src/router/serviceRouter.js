const router = require("express").Router();
const serviceModel = require("../model/serviceModel");

router.get("/get_service", async (req, res) => {
  try {
    res.send(await serviceModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_service", async (req, res) => {
  try {
    new serviceModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_service", async (req, res) => {
  try {
    await serviceModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_service", async (req, res) => {
  try {
    serviceModel.deleteOne({ _id: req.body._id }, (err) => {
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
