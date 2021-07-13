const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const {createToken} = require("../authentication/genrate-token")

router.get("/users", (req, res) => {
  res.json({ status: 200, result: "Success" });
  // console.log("GG")
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("email", password);
  const result = await user.findOne({ where: { email: email } });
  try {
    console.log(result)
    if (result === null) {
      return res.status(200).json({ status: 404, result: "Not Found" });
    }
    if (result.dataValues) {
      if (bcrypt.compareSync(password, result.dataValues.password)) {
        const token = createToken(result.dataValues.email , result.dataValues.user_role )
        return res.status(200).json({ status: 200, result: token });
      }
      else{
        return res.status(200).json({ status: 404, result: "Password not Found" });
      }
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ status: 500, result: "Not Connect" });
  }
});

// ? Register
router.post("/register", async (req, res) => {
  console.log(req.body.password);
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8);

    const result = await user.create(req.body);
    console.log(JSON.stringify(result));
    return res.status(200).json({ status: 200, result: result });
  } catch (err) {
    if (err.name == "SequelizeUniqueConstraintError") {
      console.log("Email Duplicate");
      return res.status(200).json({ status: 404, result: "Email Duplicate" });
    }
    return res.status(500).json({ status: 500, result: "Not Connect" });
  }
});

module.exports = router;
