
const express = require("express");
const app = express();
const path = require('path')
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.min.js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js/jqueory.js')))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.listen(3000,function(){
    console.log("server is running at 3000");
});
