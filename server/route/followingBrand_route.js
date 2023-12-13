const FollowingBrandController = require("../controller/followingBrand_controller.js");
const route = require("express").Router();
route.get("/:idbrand", FollowingBrandController.getUsers);
route.post("/:idbrand/:idUser", FollowingBrandController.newFollower);
route.delete("/:idbrand/:iduser", FollowingBrandController.removeFollow)
module.exports = route