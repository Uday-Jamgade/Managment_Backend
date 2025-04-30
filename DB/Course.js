const mongoose = require("mongoose");

const CourseShema= new mongoose.Schema({
  CourseName:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  },
  start_Date:{
type:String,
required:true
  },
  end_Date:{
    type:String,
    required:true
  },
  imageurl:{
    type:String,
    required:true
  },
  uid:{
    type:String,
    // required:true
  }
})

module.exports = mongoose.model("Course",CourseShema);