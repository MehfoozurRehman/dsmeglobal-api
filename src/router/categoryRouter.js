const router = require("express").Router();
const categoryModel = require("../model/categoryModel");

router.get("/get_category", async (req, res) => {
  try {
    res.send(await categoryModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_category", async (req, res) => {
  try {
    new categoryModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_category", async (req, res) => {
  try {
    categoryModel.deleteOne({ _id: req.body._id }, (err) => {
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
