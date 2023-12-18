const db = require("../model/index.js");
const Users = db.Users
exports.getAll = (req, res) => {

};

exports.getOne = async (req, res) => {
    const { email } = req.params
    try {
        let user = await Users.findOne({ where: { email: email } })
        res.status(200).send(user)
    } catch (err) {
        res.status.res.send("error happen in getOne User controller", err)
    }
}