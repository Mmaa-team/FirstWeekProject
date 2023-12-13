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
app.use("/users",userRoute);

//creator Route
const creatorRoute = require("./route/creator_route.js")
app.use("/creators",creatorRoute)

//Post Route
const postRoute = require("./route/post_route.js")
app.use("/posts",postRoute)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
