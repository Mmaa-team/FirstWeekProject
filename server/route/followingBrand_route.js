const FollowingBrandController = require("../controller/followingBrand_controller.js");
const route = require("express").Router();
route.get("/:brand/:iduser", FollowingBrandController.getUsers);
route.post("/:idbrand/:iduser", FollowingBrandController.newFollower);

module.exports = route