const db = require("../model/index.js");
const Basket = db.Basket;
const Items = db.Items;
const Users = db.Users

const addToBasket = async (req, res) => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    const item = await Basket.create({
      userId,
      itemId,
    });
    res.status(201).send("successful");
  } catch {
    res.status(404).send("failed");
  }
};

const getBasket = async (req, res) => {
  try {
    const basket = await Items.findAll({
      include: [
        {
          model: Users,
          through: {
            model: Basket,
            where: { UserId: req.params.id },
          },
        },
      ],
    });
    res.send(basket);
  } catch (error){
    res.status(404).send(error);
  }
};

module.exports = { addToBasket, getBasket };
