const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");

const middleware = require("../controller/middleware/bookmark");
routes.post("/signout", controller.signOut);
routes.post("/bookmark", controller.bookmark);
routes.post("/show",controller.show);
routes.get("/", (req, res) => {
  res.send("hello welcome to news feed");
});

routes.post("/signin", controller.signIn);

routes.get("/signin", (req, res) => {
  res.send("welcome to signin");
});

routes.post("/signup", controller.signUp);

routes.get("/signup", (req, res) => {
  res.send("hello to sign up");
});
routes.post("/cookieCheck", controller.cookieCheck);

module.exports = routes;
