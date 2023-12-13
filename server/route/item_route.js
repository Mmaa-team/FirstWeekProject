const ItemController = require("../controller/item_controller.js");
const route = require("express").Router();

route.get("/", ItemController.getAllItems);
route.get("/:collectionId", ItemController.getBrandItems);
route.get("/:collectionId/:name", ItemController.getOneItem);
route.post("/", ItemController.postItem);
route.put("/update/:itemId", ItemController.updateItemStatus);

module.exports = route;
