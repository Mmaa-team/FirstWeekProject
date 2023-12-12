const UserController=require("../controller/user_controller.js")
const route=require("express").Router()

route.get("/",UserController.getAll)




module.exports=route