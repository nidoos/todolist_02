const mongoose = require("mongoose");
const express = require("express");

// express servers
const app = express(); 
const port = 3000; //3000

app.get('/', (req, res) => {
    res.send("todolist");
})

app.listen(port, () => {
    console.log("connect");
})

