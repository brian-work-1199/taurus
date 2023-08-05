const express = require("express");
const router = express.Router();
// const User = require('../model/User');
// const Login = require("../model/Login");

router.get("/", async (req, res) => {
  res.render("home_page");
});

router.get("/home", async (req, res) => {
  return res.render("home_page");
});

router.get("/achievement", async (req, res) => {
  // const users = await User.findAll();
  res.render("achievement");
});

router.post("/signup", async (req, res) => {
  // const signup = await Login.create({ username: "Hector", password: "hehehe" });
  return res.redirect("home");
});

router.get("/blog", async (req, res) => {
  return res.render("blog");
});

module.exports = router;
