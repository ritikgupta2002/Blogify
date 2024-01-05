const express = require("express");
const Router = express.Router();
const Blog=require("../models/blog.js");

Router.get("/add-new",(req,res)=>{
    res.render("addBlog",{
       user:req.user
    })
})

module.exports=Router;