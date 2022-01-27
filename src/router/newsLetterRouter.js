const router = require("express").Router();
const newsLetterModel = require("../model/newsLetterModel");

router.get("/get_news_letter", async (req, res) => {
  try {
    res.send(await newsLetterModel.find({}));
  } catch (error) {
    console.log(error);
  }
});

router.post("/set_news_letter", async (req, res) => {
  try {
    new newsLetterModel(req.body).save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
