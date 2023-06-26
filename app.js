const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/navbar.html");
})

const port  = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running");
})