const router = require("express").Router();
const clientModel = require("../model/clientModel");

router.get("/get_client", async (req, res) => {
  try {
    res.send(await clientModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_client", async (req, res) => {
  try {
    new clientModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update_client", async (req, res) => {
  try {
    await clientModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete_client", async (req, res) => {
  try {
    clientModel.deleteOne({ _id: req.body._id }, (err) => {
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
