const {getAllPosts,addPost}=require("../controller/post_controller.js")
const route=require("express").Router()

route.get("/:creatorId",getAllPosts)
route.post("/:creatorId",addPost)




module.exports=route