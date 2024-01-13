const express = require("express");
const Router = express.Router();
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blog.js");
const Comment = require("../models/comment.js");

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

Router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  // console.log(blog);
  res.render("blog", {
    user: req.user,
    blog,
  });
});

Router.post("/", upload.single("coverImage"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const { title, body } = req.body;
  const blog = await Blog.create({
    title,
    body,
    coverImageUrl: `uploads/${req.file.filename}`,
    createdBy: req.user.id,
  });
  // console.log(blog.createdBy);
  return res.redirect(`/blog/${blog._id}`); 
});

Router.post("/comment/:id", async (req, res) => {
  // console.log(req.body.content,req.user);
    const comment=await Comment.create({
    content: req.body.content,
    blogId: req.params.id,
    createdBy: req.user.id,
  });
  console.log(comment);
  return res.redirect(`/blog/${req.params.id}`);
});

module.exports = Router;
