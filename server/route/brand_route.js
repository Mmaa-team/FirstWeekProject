const BrandController = require("../controller/brand_controller.js");
const route = require("express").Router()
route.get("/", BrandController.getAll);
route.get("/:brand", BrandController.getOne);
route.post("/addBrand", BrandController.addBrand);
route.put("/newStatus/:id_brand", BrandController.updateStatus);
module.exports = route