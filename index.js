const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/company");


const express = require('express');
const app = express();

const employeeRoute = require("./routes/employeeRoute");

app.use('/',employeeRoute)

app.listen(2000,function(){
    console.log("Server is running on Port 5000");
})
