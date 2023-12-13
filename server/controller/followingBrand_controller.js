
const db = require("../model/index.js");
const FollowingBrand = db.FollowingBrand;
const Users = db.Users
const Brand = db.Brand

exports.getUsers = async (req, res) => {
    const { brand } = req.params
    try {
        let followers = await FollowingBrand.findAll({
            where: { brandName: brand }, include: [
                {
                    model: Users,
                }
            ]
        })
        res.status(200).json(followers)
    } catch (err) {
        res.status(400).json()
    }
}

exports.newFollower = async (req, res) => {
    const { idbrand, idUser } = req.params
    try {
        let follower = await FollowingBrand.create({
            userId: idUser,
            brandId: idbrand
        })
        res.status(200).json("Follow added")
    } catch (err) {
        res.status(400).json("error happen from the newFollower controller", err)
    }
}