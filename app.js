const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("This is get response");
});
app.post("/", (req, res)=>{
    res.send("This is post response");
});
app.put("/", (req, res)=>{
    res.send("This is put response");
});
app.delete("/", (req, res)=>{
    res.send("This is delete response");
});


module.exports = {
    app
}