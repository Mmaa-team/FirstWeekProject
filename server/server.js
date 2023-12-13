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
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
