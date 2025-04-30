const mongoose = require("mongoose");
const Course = require("./Course");

const Student = new mongoose.Schema({
    studentname:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
       type:String,
       required:true
    },
    imageurl:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.Soqtvc8GbISKlazg81TPigHaFy?rs=1&pid=ImgDetMain"
    },
    uid:{
        type:String
    },
    Courseid:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model("Student",Student);