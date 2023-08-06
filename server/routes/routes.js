const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller")

routes.get("/", (req, res) => {
  res.send("hello welcome to news feed");
});
routes.post("/login",controller.login);
routes.get("/login",(req,res)=>{
    res.send("welcome to login")
});
routes.post("/signin",controller.signIn );
routes.get("/signin",(req,res)=>{
    res.send("hello to sign up")
});
module.exports = routes;
