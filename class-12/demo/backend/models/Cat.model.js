"use strict";
const mongoose=require("mongoose");
const {ownerSchema,ownerModel}=require("./Owner.model");

const catSchema=new mongoose.Schema({
    catName:String,
    owner:ownerSchema
    
});

const catModel=mongoose.model("cat",catSchema);

const seedCat=()=>{
    let owner=new ownerModel({
        ownerName:"Yahia",
        email:"v.salvatore7.gs@gmail.com"
    })
    owner.save();
    let newCat={
        catName:"Candy",
        owner:owner

    }

    let cat=new catModel(newCat);
    cat.save();
}

module.exports={
    catModel,
    seedCat
}