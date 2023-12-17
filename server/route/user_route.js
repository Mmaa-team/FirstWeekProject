const UserController = require("../controller/user_controller.js")
const route = require("express").Router()

route.get("/", UserController.getAll)
route.get("/:email", UserController.getOne)



module.exports = route