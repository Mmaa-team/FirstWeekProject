const db = require("../model/index.js");
const Basket=db.Basket
const Items=db.Items
console.log("testtt");
const addToBasket= async(req,res) => {
    try { 
        const userId=req.params.id
        const itemId=req.body.id
        const item = await Basket.create({
            userId,
            itemId
        })
        res.status(201).send("successful")
    }
    catch {
        res.status(404).send("failed")
    }
}

const getBasket= async (req,res)=> {
    try {
        const basket = await Basket.findAll({ include: [{ model: Items }],where: {userId: req.params.id}})
        res.send(basket)
    }
    catch {
        res.status(404).send("failed")
    }
}

module.exports = {addToBasket,getBasket}