const {updatePfImage,updateBgImage,updateAdress,updateBio,updateStatus}=require("../controller/creator_controller.js")
const route=require("express").Router()

route.put("/pfimage/:id",updatePfImage)
route.put("/bgimage/:id",updateBgImage)
route.put("/adress/:id",updateAdress)
route.put("/bio/:id",updateBio)
route.put("/status/:id",updateStatus)


module.exports=route