const UserController=require("../controller/auth_controller.js")
const route=require("express").Router()

route.post("/signup",UserController.signup)
route.post("/signin",UserController.signin)
route.post("/logout",UserController.logout)




module.exports=route