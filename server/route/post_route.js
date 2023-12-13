const {getAllPosts,addPost,updatePostStatus,deletePost}=require("../controller/post_controller.js")
const route=require("express").Router()

route.get("/:creatorId",getAllPosts)
route.post("/:creatorId",addPost)
route.put("/status/:id",updatePostStatus)
route.delete("/:id",deletePost)





module.exports=route