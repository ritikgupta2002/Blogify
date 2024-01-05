const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.js");
const { checkForAuthenticationCookie } = require("./middlewares/authentication.js");
const app = express();
const port = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify")
  .then((e) => console.log("MongoDB Connected"))
  .catch((e) => console.log("MongoDB Error"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.get("/", (req, res) => {
  res.render("home",{
    user:req.user
  });
});
app.use("/user", userRoute);

app.listen(port, () => {
  console.log("server is running on port", port);
});
