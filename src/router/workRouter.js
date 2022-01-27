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
    new workModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
