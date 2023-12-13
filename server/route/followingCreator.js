const FollowingCreatorController = require("../controller/followingCreator_controller.js");
const route = require("express").Router()
route.get("/:idcreator", FollowingCreatorController.getAllUsers);
route.post("/:idcreator/:iduser", FollowingCreatorController.newFollower);
route.delete("/:idcreator/:iduser", FollowingCreatorController.removeFollow);


module.exports = route