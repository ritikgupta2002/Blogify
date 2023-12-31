const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user.js");
const port = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify")
  .then((e) => console.log("MongoDB Connected"))
  .catch((e) => console.log("MongoDB Error"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("home");
});
app.use("/user", userRoute);

app.listen(port, () => {
  console.log("server is running on port", port);
});
