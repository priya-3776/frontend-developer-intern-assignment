import express from "express";
import auth from "../middleware/auth.js";
import Task from "../models/Task.js";
const r=express.Router();

r.post("/",auth,async(req,res)=>res.json(await Task.create({...req.body,user:req.user.id})));
r.get("/",auth,async(req,res)=>res.json(await Task.find({user:req.user.id})));
r.delete("/:id",auth,async(req,res)=>{await Task.findByIdAndDelete(req.params.id);res.json({ok:true});});

export default r;