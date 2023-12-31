const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const { createHmac } = require("crypto");

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
  const user = await User.findOne({ email });
  if (!user) {
    return { error: "User not found" };
  }
  const inputHash = createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");

  if(inputHash==user.password){
    res.redirect("/");
  }else{
    return { error: "Invalid password" };
  }
});

module.exports = Router;
