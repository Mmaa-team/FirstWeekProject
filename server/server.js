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

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
