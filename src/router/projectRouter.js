const router = require("express").Router();
const projectModel = require("../model/projectModel");

router.get("/get_project", async (req, res) => {
  try {
    res.send(await projectModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_project", async (req, res) => {
  try {
    new projectModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_project", async (req, res) => {
  try {
    await projectModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_project", async (req, res) => {
  try {
    projectModel.deleteOne({ _id: req.body._id }, (err) => {
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
