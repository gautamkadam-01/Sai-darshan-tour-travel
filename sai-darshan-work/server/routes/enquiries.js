import express from "express";
import Enquiry from "../models/Enquiry.js";
const router=express.Router();
router.post("/", async(req,res)=>{
 try{ const item=await Enquiry.create(req.body); res.status(201).json({success:true,id:item._id}); }
 catch(e){res.status(400).json({success:false,message:e.message});}
});
router.get("/", async(req,res)=>{
 try{const items=await Enquiry.find().sort({createdAt:-1}).limit(200);res.json(items);}
 catch(e){res.status(500).json({message:e.message});}
});
export default router;
