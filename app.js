const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.sendFile(__+"/navbar.html");
})

const port  = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running");
})