const express = require("express");
const cors = require("cors")
require("./DB/config")
const User = require("./Router/User");
const Course = require("./Router/Course");
const Student= require("./Router/Student");
const Fee = require("./Router/Fee");

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/v1",User)
app.use("/api/v1",Course)
app.use("/api/v1",Student)
app.use("/api/v1",Fee)

app.listen(3000, ()=>{
    console.log(`Server run on 3000`);
})