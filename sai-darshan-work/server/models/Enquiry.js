import mongoose from "mongoose";
const schema = new mongoose.Schema({
 type:{type:String,required:true}, name:{type:String,required:true}, phone:{type:String,required:true},
 pickup:String, drop:String, date:String, time:String, passengers:String, vehicle:String, hotel:String,
 assistance:String, message:String
},{timestamps:true});
export default mongoose.model("Enquiry",schema);
