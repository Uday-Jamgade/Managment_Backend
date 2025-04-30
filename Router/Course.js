const express = require("express");
const router = express.Router();
const User = require("../DB/User");
const Course = require("../DB/Course")
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
const {authenticateToken}=require("./UsersAuth");
const Student = require("../DB/Student");


router.post("/add_course",authenticateToken,async (req,res)=>{
try{
 const  {CourseName,price,desc,start_Date,end_Date,imageurl} = req.body ;
 const {id} = req.headers;

 const newCourse = await Course({
    CourseName:CourseName,
    price:price,
    desc:desc,
    start_Date:start_Date,
    end_Date:end_Date,
    imageurl:imageurl,
    uid:id
 })

 await newCourse.save();
 return res.status(201).json({message:"Course add succesfully"});
} catch (error) {
    console.log("error",error)
   res.status(500).json({message:"server Error"}); 
}
});

router.get("/get-all-course",authenticateToken,async (req,res)=>{
try {
   const allCourse= await Course.find()

   return res.json({
      message:"200",
      data:allCourse
   })
   
} catch (error) {
   console.log("error",error)
   res.status(500).json({message:"server Error"}); 
}
   })

   router.put("/detail-course/:id",authenticateToken,async (req,res)=>{
      try{
       const {id} = req.params; 
      
  
       console.log(id);

      const course=await Course.findById(id);

       if(course){
       StudentList = await Student.find(id)
       }

       res.json({
         message: "sussesfull",
         data:course,
         students: StudentList
       })
  
  
      } catch (error) {
          console.log("error",error)
         res.status(500).json({message:"server Error"}); 
      }
      })


router.put("/update_course/:id",authenticateToken,async (req,res)=>{
    try{
     const {id} = req.params; 
    

     console.log(id);

     await Course.findByIdAndUpdate(id,{
        CourseName:CourseName,
        price:price,
        desc:desc,
        start_Date:start_Date,
        end_Date:end_Date,
        imageurl:imageurl
     })

     return res.status(201).json({message:"Course add succesfully"});
    } catch (error) {
        console.log("error",error)
       res.status(500).json({message:"server Error"}); 
    }
    })

    router.delete("/delete_course/:id",authenticateToken,async (req,res)=>{
      try{
       const {id} = req.params; 
      
       await Course.findByIdAndDelete(id)
  
       return res.status(201).json({message:"Course add succesfully"});
      } catch (error) {
          console.log("error",error)
         res.status(500).json({message:"server Error"}); 
      }
      })


module.exports = router;