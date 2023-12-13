const {createCreator}=require("../controller/creator_controller.js")
const route=require("express").Router()

route.post("/",createCreator)


module.exports=route