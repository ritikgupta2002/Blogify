const express = require("express");
const Router = express.Router();
const User = require("../models/user");

Router.get("/signin", (req, res) => {
  res.render("signin");
});

Router.get("/signup", (req, res) => {
  res.render("signup");
});

Router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({ fullName, email, password });
  return res.redirect("signin");
});

Router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    //  console.log(token);
    res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect email or Password",
    });
  }
});

Router.get("/logout", async (req, res) => {
  res.clearCookie("token").redirect("signin");
});

module.exports = Router;
