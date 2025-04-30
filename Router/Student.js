const express = require("express");
const router = express.Router();
const student = require("../DB/Student")
const jwt= require("jsonwebtoken");
const {authenticateToken}=require("./UsersAuth");

router.post("/add-student" ,authenticateToken,async (req,res)=>{
try {
    const {studentname,phone,email,address,imageurl,courseid,uid}= req.body;
    const {id}= req.headers;
    const add_student = new student({
        studentname:studentname,
        phone:phone,
        email:email,
        address:address,
        Courseid:courseid,
        imageurl:imageurl,
        uid:id
    }) 

    await add_student.save();

  return res.status(201).json({message:"User created succesfully"});
} catch (error) {
    console.log("error",error)
   res.status(500).json({message:"server Error"}); 
}

})

router.get("/get-all-student",authenticateToken,async (req,res)=>{
try {
   const allstudent= await student.find()

   return res.json({
      message:"200",
      data:allstudent
   })
   
} catch (error) {
   console.log("error",error)
   res.status(500).json({message:"server Error"}); 
}
   })

   router.get("/get-student/:Courseid",authenticateToken,async (req,res)=>{
      try {
         const {Courseid}= req.params
         const allstudent= await student.find(Courseid);
      
         return res.json({
            message:"200",
            data:allstudent
         })
         
      } catch (error) {
         console.log("error",error)
         res.status(500).json({message:"server Error"}); 
      }
         })

   module.exports=router