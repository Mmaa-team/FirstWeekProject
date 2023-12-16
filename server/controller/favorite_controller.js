const db = require("../model/index.js");
const Favorite = db.Favorite;
const User = db.Users
const Item = db.Items

exports.getFavItem = async (req, res) => {
    const { iduser } = req.params
    try {
        const fav = await User.findAll({
            where: { id: iduser }
            , include: [
                {
                    model: Item, through: Favorite
                }
            ]
        })
        console.log(fav[0].items)
        res.status(200).send(fav[0].items)
    } catch (err) {
        res.status(400).send(err)
    }
}

exports.addFav = async (req, res) => {
    const { idItem, iduser } = req.params
    try {
        let newFav = await Favorite.create({
            userId: iduser,
            itemId: idItem
        })
        res.status(200).json("fav item added")
    } catch (err) {
        res.status(400).json("error happen in add fav item", err)
    }
}

exports.removeFav = async (req, res) => {
    let { iditem, iduser } = req.params
    // console.log(idItem,iduser);
    try {
        await Favorite.destroy({
            where: { itemId: iditem, userId: iduser }
        })
        res.status(200).send("fav item removed successfully")
    } catch (err) {
        res.status(400).send(err)
    }
}
