const {updatePfImage,updateBgImage,updateAdress,updateBio,updateStatus,getAllCreators,getOneCreator}=require("../controller/creator_controller.js")
const route=require("express").Router()



route.get("/",getAllCreators)
route.get("/:id",getOneCreator)

route.put("/pfimage/:id",updatePfImage)
route.put("/bgimage/:id",updateBgImage)
route.put("/adress/:id",updateAdress)
route.put("/bio/:id",updateBio)
route.put("/status/:id",updateStatus)



module.exports=route