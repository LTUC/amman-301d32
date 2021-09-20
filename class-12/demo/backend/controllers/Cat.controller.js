"use strict";

const {catModel}=require("../models/Cat.model");
const {ownerModel}=require("../models/Owner.model");



const getCatsController=(req,res)=>{
    catModel.find({}).then(data=>{
        res.status(200).json(data)
    })
}

const createCatController=async (req,res)=>{
    let {catName,owner}=req.body;
    let newOwner=ownerModel(owner);
    newOwner.save();
    let newCat=new catModel({catName:catName,owner:newOwner})
    newCat.save()
    let catsList=await catModel.find({});
    res.status(201).json(catsList);
    
}

const deleteCatController=  (req,res)=>{
    let id=req.params.id;
    catModel.findByIdAndDelete(id,async (err,data)=>{
        if(err){
            res.status(500).send("an error occured");
        }
        let catsList= await catModel.find({});
        res.json(catsList);
           
    })
}


module.exports={
    createCatController,
    deleteCatController,
    getCatsController

}