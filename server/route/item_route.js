const ItemController = require("../controller/item_controller.js");
const route = require("express").Router();

route.get("/", ItemController.getAllItems);
route.get("/brands/:itemCategory", ItemController.getBrandItems);
route.get("/item/status/:status", ItemController.getItemStatus);
route.get("/brand/collections/:collectionId/:name", ItemController.getOneItem);
route.get("/item/collections/:collectionId", ItemController.getItemsCollection);
route.post("/", ItemController.postItem);
route.put("/update/:itemId", ItemController.updateItemStatus);

module.exports = route;
