const router = require("express").Router();
const blogModel = require("../model/blogModel");

router.get("/get_blog", async (req, res) => {
  try {
    res.send(await blogModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_blog", async (req, res) => {
  try {
    new blogModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_blog", async (req, res) => {
  try {
    await blogModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_blog", async (req, res) => {
  try {
    blogModel.deleteOne({ _id: req.body._id }, (err) => {
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
