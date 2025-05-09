const express = require("express");
const router = express.Router();
const jwt= require("jsonwebtoken");
const {authenticateToken}=require("./UsersAuth");
const Student = require("../DB/Student");
const Course = require("../DB/Course");
const Fees = require("../DB/Fee")


router.get("/Home",authenticateToken,async (req,res)=>{
    try {
       const lateststudent= await Student.find().sort({$natural:-1}).limit(5);
       const latestPayment = await Fees.find().sort({$natural:-1}).limit(5);
       const totalCourse = await Course.countDocuments();
       const totalStudent = await Student.countDocuments();
       const totalAmount = await Fees.aggregate([{$group:{_id:null , total:{$sum:"$amount"}}}])    
       return res.json({
          message:"200",
          Student: lateststudent,
          payment: latestPayment,
        course: totalCourse,
       Totalstudent :totalStudent,
       amount: totalAmount
       })
       
    } catch (error) {
       console.log("error",error)
       res.status(500).json({message:"server Error"}); 
    }
       })

       module.exports = router;
