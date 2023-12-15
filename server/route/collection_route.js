const CollectionController = require("../controller/collection_controller");
const route = require("express").Router();

route.get("/", CollectionController.getAll);
route.get("collection/:creator/:brand", CollectionController.getBrandCollections);
route.get("collection/:creator", CollectionController.getAllBrandsCollections);

route.get(
  "/item/:brand",
  CollectionController.getOneBrandsCollection
);
route.get(
  "/:brand/:creator/:collection_id",
  CollectionController.getOneBrandsWithCreaterCollection
);
route.post("/:brand/:creator", CollectionController.addCollection);

module.exports = route;
