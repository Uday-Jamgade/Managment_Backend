const express = require("express");
const cors = require("cors")
require("./DB/config")
require('dotenv').config();

const User = require("./Router/User");
const Course = require("./Router/Course");
const Student= require("./Router/Student");
const Fee = require("./Router/Fee");
const Home = require("./Router/Home")

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/v1",User)
app.use("/api/v1",Course)
app.use("/api/v1",Student)
app.use("/api/v1",Fee)
app.use("/api/v1",Home)

app.listen(process.env.PORT, ()=>{
    console.log(`Server run on ${process.env.PORT}`);
})