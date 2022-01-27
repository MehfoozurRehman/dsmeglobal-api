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

module.exports = router;
