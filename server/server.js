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
const authRoute=require("./route/auth_route.js")
app.use("/users",userRoute);
app.use("/auth",authRoute);
//collection
const collectionRoute = require("./route/collection_route.js");
app.use("/collections",collectionRoute);
//items
const itemRoute = require("./route/item_route.js");
app.use("/items",itemRoute);


//creator Route
const creatorRoute = require("./route/creator_route.js")
app.use("/creators",creatorRoute)

//Post Route
const postRoute = require("./route/post_route.js")
app.use("/posts",postRoute)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
