const {getAllPosts,addPost,updatePostStatus,deletePost}=require("../controller/post_controller.js")
const route=require("express").Router()

route.get("/:creatorId",getAllPosts)
route.post("/:creatorId",addPost)
route.put("/status/:id",updatePostStatus)
route.delete("/:id",deletePost)
// route.put("/like/:id",updatePostLikes)




module.exports=route