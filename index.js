const express=require('express');
const app=express();
const port=8000;
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render("home");
});

app.listen(port,()=>{
    console.log("server is running on port",port);
})

