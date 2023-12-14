const db = require("../model/index.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  signup: async (req, res) => {
    if (req.params.role === "creator") {
      var table = db.Creator;
    } else table = db.Users;
    try {
      const { fullName, userName, email, password, dateBirth } = req.body;

      const users = await table.findAndCountAll({ where: { email } });

      if (users.count) {
        return res.status(409).send("userAlreadyexist");
      }
      const salt = bcryptjs.genSaltSync(5);
      const hach = bcryptjs.hashSync(password, salt);
      const user = await table.create({
        fullName,
        userName,
        email,
        password: hach,
        dateBirth,
      });
      return res.status(200).send("done");
    } catch (err) {
      res.status(500).send("err");
    }
  },
  signin: async (req, res) => {
    try {
      if (req.params.role === "creator") {
        var table = db.Creator;
      } else table = db.Users;
      const user = await table.findOne({ where: { email: req.body.email } });
      console.log("hoihln");
      if (!Object.keys(user.dataValues).length) {
        return res.status(409).send("userdoesntexist");
      }
      const isPasswordcorrect = bcryptjs.compareSync(
        req.body.password,
        user.dataValues.password
      );
      console.log(isPasswordcorrect);
      if (!isPasswordcorrect) {
        return res.status(409).json("password incorrect");
      }
      const { fullName, userName, email, dateBirth } = user.dataValues;

      const token = jwt.sign({ id: user.dataValues.id }, "jwtkey");
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .send({ fullName, userName, email, dateBirth });
    } catch (err) {
      res.status(500).send("ereur");
    }
  },
  logout: (req, res) => {
    res
      .clearCookie("access_token", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json("user has been loged out");
  },
};
