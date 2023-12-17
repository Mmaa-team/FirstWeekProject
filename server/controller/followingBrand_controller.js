
const db = require("../model/index.js");
const FollowingBrand = db.FollowingBrand;
const Users = db.Users
const Brand = db.Brand

exports.getUsers = async (req, res) => {
    const { idbrand } = req.params
    try {
        let followers = await Brand.findAll({
            where: { id: idbrand },
            include: [
                {
                    model: Users, through: FollowingBrand
                }
            ]
        })
        res.status(200).send(followers)
    } catch (err) {
        res.status(400).send(err)
    }
}

exports.newFollower = async (req, res) => {
    const { idbrand, idUser } = req.params
    // console.log(idbrand, idUser);
    try {
        let follower = await FollowingBrand.create({
            userId: idUser,
            brandId: idbrand
        })
        res.status(200).send("Follow added")
    } catch (err) {
        res.status(400).send("error happen from the newFollower controller", err)
    }
}

exports.removeFollow = async (req, res) => {
    let { idbrand, iduser } = req.params
    // console.log(idbrand, iduser)
    try {
        const removeFollower = await FollowingBrand.destroy({
            where: { brandId: idbrand, userId: iduser }
        })
        res.status(200).send("follow removed")
    } catch (err) {
        res.status(404).send('la')
    }
}