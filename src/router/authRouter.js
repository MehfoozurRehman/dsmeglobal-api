const router = require("express").Router();
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res
        .status(409)
        .json({ message: "User Already Exist. Please Login" });
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
      isAdmin: isAdmin,
    }).save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json(user);
    } else res.json({ message: "Invalid Credentials" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
