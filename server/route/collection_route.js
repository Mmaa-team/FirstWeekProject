const CollectionController = require("../controller/collection_controller");
const route = require("express").Router();

route.get("/", CollectionController.getAll);
route.get("/:creator/:brand", CollectionController.getBrandCollections);
route.get("/:creator", CollectionController.getAllBrandsCollections);

route.get(
  "/collection/:brand/:creator/:collection_name",
  CollectionController.getOneBrandsCollection
);
route.post("/collection/:brand/:creator", CollectionController.addCollection);

module.exports = route;
