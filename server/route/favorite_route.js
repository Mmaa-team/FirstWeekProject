const favoriteController = require("../controller/favorite_controller.js");
const route = require("express").Router();
route.get("/:iduser", favoriteController.getFavItem);
route.post("/:idItem/:iduser", favoriteController.addFav);
route.delete("/:iditem/:iduser", favoriteController.removeFav);
module.exports = route