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
        res.status(200).json(fav)
    } catch (err) {
        res.status(400).json("error happen in get fav item")
    }
}

exports.addFav=(req,res)=>{
    
    try{

    }catch(err){

    }
}
