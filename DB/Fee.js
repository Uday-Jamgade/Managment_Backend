const mongoose = require("mongoose");

const Fees = new mongoose.Schema({
    studentname:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
     amount:{
        type:String
     },
     remark:{
        type:String
     },
    uid:{
        type:String
    },
    Courseid:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model("Fees",Fees);