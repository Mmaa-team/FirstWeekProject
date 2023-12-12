const ItemController=require("../controller/item_controller.js")
const route=require("express").Router()

route.get('/:brand',ItemController.getAll)
route.get('/:brand/:name',ItemController.getOne)




module.exports=route