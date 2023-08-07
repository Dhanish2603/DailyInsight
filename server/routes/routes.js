const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");

// routes.post("/sample",controller.sample)
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

module.exports = routes;