import express from "express";
import auth from "../middleware/auth.js";
import User from "../models/User.js";
const r=express.Router();

r.get("/",auth,async(req,res)=>{
  res.json(await User.findById(req.user.id).select("-password"));
});

export default r;