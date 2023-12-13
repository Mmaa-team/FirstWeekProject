const favoriteController = require("../controller/favorite_controller.js");
const route = require("express").Router();
route.get("/:iduser", favoriteController.getFavItem);
route.post("/:iditem/:iduser", favoriteController.addFav)

module.exports = route