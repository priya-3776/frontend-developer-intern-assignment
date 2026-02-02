import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const r=express.Router();

r.post("/signup",async(req,res)=>{
  const u=await User.create({
    name:req.body.name,
    email:req.body.email,
    password:await bcrypt.hash(req.body.password,10)
  });
  res.json(u);
});

r.post("/login",async(req,res)=>{
  const u=await User.findOne({email:req.body.email});
  if(!u||!(await bcrypt.compare(req.body.password,u.password)))
    return res.status(400).json({message:"Invalid"});
  res.json({token:jwt.sign({id:u._id},process.env.JWT_SECRET)});
});

export default r;