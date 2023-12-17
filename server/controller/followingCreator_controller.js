const db = require("../model/index");
const FollowingCreator = db.FollowingCreator
const Users = db.Users
const Creator = db.Creator

exports.getAllUsers = async (req, res) => {
    let { idcreator } = req.params
    try {
        const followers = await Creator.findAll({
            where: { id: idcreator },
            include: [
                {
                    model: Users, through: FollowingCreator
                }
            ]
        })
        res.status(200).send(followers)
    } catch (err) {
        res.status(400).send("error happen in get All users followers to Creators")
    }
}


exports.newFollower = async (req, res) => {
    const { idcreator, iduser } = req.params
    console.log(idcreator,iduser);
    try {
        let newFollow = await FollowingCreator.create({
            userId: +iduser,
            creatorId: +idcreator
        })
        res.status(200).send("follow added successfully")
    } catch (err) {
        res.status(400).json(err)
    }
}

exports.removeFollow = async (req, res) => {
    let { idcreator, iduser } = req.params
    // console.log(idcreator, iduser)
    try {
        const removeFollower = await FollowingCreator.destroy({
            where: { creatorId: idcreator, userId: iduser }
        })
        res.status(200).send("follow removed")
    } catch (err) {
        res.status(404).send("error happen in remove follower creator", err)
    }
} 