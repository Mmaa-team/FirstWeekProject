const CollectionController = require("../controller/collection_controller");
const route = require("express").Router();

route.get("/", CollectionController.getAll);
route.get("/:creator/:brand", CollectionController.getBrandCollections);
route.get("/:creator", CollectionController.getAllBrandsCollections);

route.get(
  "/:brand/:creator/:collection_id",
  CollectionController.getOneBrandsCollection
);
route.post("/:brand/:creator", CollectionController.addCollection);

module.exports = route;
