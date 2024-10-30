const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// template engine
app.set("view engine", "ejs");
app.set("views", "./views");
// Routers
const mainRouter = require("./router/main");
const registerRouter = require("./router/register");
app.use("/register", registerRouter);
app.use("/", mainRouter);

// Listen to port
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("Example app listening on port 3002!");
});
