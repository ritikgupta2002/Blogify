const express = require("express");
const Router = express.Router();
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blog.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

Router.get("/add-new", (req, res) => {
  res.render("addBlog", {
    user: req.user,
  });
});

Router.post("/", upload.single("coverImage"), async(req, res) => {
  console.log(req.body);
  console.log(req.file);
  const { title, body } = req.body;
  const  blog= await Blog.create({
    title,
    body,
    coverImageURl: `uploads/${req.file.filename}`,
    createdBy: req.user_id,
  });
  return res.redirect(`/blog/${blog._id}`);
});

module.exports = Router;
