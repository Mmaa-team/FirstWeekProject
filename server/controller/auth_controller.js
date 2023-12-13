const db = require("../model/index.js");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  signup: async (req, res) => {
    try {
      const { fullName, userName, email, password, dateBirth } = req.body

      const users = await db.Users.findAndCountAll({ where: { email } });
      console.log(users, 'users')
      if (users.count) {
        return res.status(409).send("userAlreadyexist")
      }
      const salt = bcryptjs.genSaltSync(5)
      const hach = bcryptjs.hashSync(password, salt)
      const user = await db.Users.create({ fullName, userName, email, password: hach, dateBirth })
      return res.status(200).send('done')
    }
    catch (err) {
      res.status(500).send('err')
    }
  },
  signin: async (req, res) => {
    try {

      const user = await db.Users.findOne({ where: { email: req.body.email } });
      if (!Object.keys(user.dataValues) .length) {
        return res.status(409).send("userdoesntexist")
      }
 console.log(user.dataValues.password)
      const isPasswordcorrect = bcryptjs.compareSync(req.body.password, user.dataValues.password);
      console.log(isPasswordcorrect)
      if (!isPasswordcorrect) { return res.status(409).json("password incorrect") }
      const { fullName, userName, email, dateBirth } = user.dataValues

      const token = jwt.sign({ id: user.dataValues.id }, 'jwtkey')
      res.cookie("access_token", token, { httpOnly: true }).status(200).send({ fullName, userName, email, dateBirth });
    }
    catch (err) { res.status(500).send('ereur') }


  },
  logout: (req, res) => {
    res.clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    }).status(200).json('user has been loged out')
  }
}