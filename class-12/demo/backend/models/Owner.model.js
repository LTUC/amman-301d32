"use strict";
const mongoose=require("mongoose");

const ownerSchema=new mongoose.Schema({
    ownerName:String,
    email:String
    
});

const ownerModel=mongoose.model("owner",ownerSchema);

module.exports={
    ownerSchema,
    ownerModel
}