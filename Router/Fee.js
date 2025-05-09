
const express = require("express");
const router = express.Router();
const Fee = require("../DB/Fee")
const jwt= require("jsonwebtoken");
const {authenticateToken}=require("./UsersAuth");


router.post("/add-fee" ,authenticateToken,async (req,res)=>{
    try {
        const {studentname,phone,amount,remark,Courseid}= req.body;
        const {id}= req.headers;
        const add_fee = new Fee({
            studentname:studentname,
            phone:phone,
            amount:amount,
            Courseid:Courseid,
            remark:remark,
            uid:id
        }) 
    
        await add_fee.save();
    
      return res.status(201).json({message:"fees added succesfully"});
    } catch (error) {
        console.log("error",error)
       res.status(500).json({message:"server Error"}); 
    }
    
    })

    router.get("/payment-history" ,authenticateToken,async (req,res)=>{
        try {
            const result=await Fee.find();

            res.json({
                message:"succefull",
                data:result
            })
        } catch (error) {
            console.log("error",error)
           res.status(500).json({message:"server Error"}); 
        }
        
        })

        router.get("/all-pay/:id" ,authenticateToken,async (req,res)=>{
            try {
    
                const result=await Fee.find({Courseid:req.query.courseid,phone:req.query.phone});
    
                res.json({
                    message:"succefull",
                    data:result
                })
            } catch (error) {
                console.log("error",error)
               res.status(500).json({message:"server Error"}); 
            }
            })

module.exports=router