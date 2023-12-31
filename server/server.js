const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 8000;
const app = express();

/* Middleware */
app.use(express.json());
app.use(cors());
/* Connect database with server  */
const db = require("./model/index.js");

//user Route
const userRoute = require("./route/user_route.js");
app.use("/users", userRoute);

// brand route:
const brandRoute = require("./route/brand_route.js");
app.use("/brands", brandRoute);

// followingBrand route:
const followingBrandRoute = require("./route/followingBrand_route.js")
app.use("/followingBrand", followingBrandRoute)

//Following Creator route:
const followingCreatorRoute = require("./route/followingCreator.js");
app.use("/followingCreator", followingCreatorRoute);

//favorite Items route:
const favoriteRoute = require("./route/favorite_route.js");
app.use("/favoriteItem", favoriteRoute);

//authentication route
const authRoute = require("./route/auth_route.js")
app.use("/auth", authRoute);

//collection route
const collectionRoute = require("./route/collection_route.js");
app.use("/collections", collectionRoute);

//items route
const itemRoute = require("./route/item_route.js");
app.use("/items", itemRoute);

//Creator Route
const creatorRoute = require("./route/creator_route.js")
app.use("/creators", creatorRoute)

//Post Route
const postRoute = require("./route/post_route.js")
app.use("/posts", postRoute)

//Basket Route
const basketRoute = require("./route/basket_route.js")
app.use("/baskets",basketRoute)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
