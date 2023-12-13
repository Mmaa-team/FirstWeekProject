const {addToBasket,getBasket}=require("../controller/basket_controller.js")
const route=require("express").Router()

route.post("/:id",addToBasket)
route.get("/:id",getBasket)
module.exports=route