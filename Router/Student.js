const express = require("express");
const router = express.Router();
const student = require("../DB/Student")
const fee = require("../DB/Fee")
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

         router.get("/get-studentdetail/:Studentid",authenticateToken,async (req,res)=>{
            try {
               const {Studentid}= req.params;
               const students= await student.findById(Studentid);
               if(students){
                  const fees = await fee.find({Courseid:students.Courseid ,phone:students.phone})
                
                  return res.json({
                     message:"200",
                     data:students,
                     payment: fees
                  })
               }

            } catch (error) {
               console.log("error",error)
               res.status(500).json({message:"server Error"}); 
            }
               })

      router.delete("/delete_student/:id",authenticateToken,async (req,res)=>{
            try{
             const {id} = req.params; 
            
             await student.findByIdAndDelete(id)
        
             return res.status(201).json({message:"Student deleted succesfully"});
            } catch (error) {
                console.log("error",error)
               res.status(500).json({message:"server Error"}); 
            }

            })
   router.put("/update_student/:id",authenticateToken,async (req,res)=>{
       try{
        const {id} = req.params; 
        const {studentname,phone,email,address,imageurl,Courseid}= req.body;
       
   
        await student.findByIdAndUpdate(id,{
         studentname:studentname,
         phone:phone,
         email:email,
         address:address,
         Courseid:Courseid,
         imageurl:imageurl,
         uid:id
        })
   
        return res.status(201).json({message:"Student update succesfully"});
       } catch (error) {
           console.log("error",error)
          res.status(500).json({message:"server Error"}); 
       }
       })
      
      

   module.exports=router