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

module.exports = router;
