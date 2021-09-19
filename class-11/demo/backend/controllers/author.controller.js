"use strict";
const {AuthorModel}=require("../models/Author.model");

let authorsController= (req,res)=>{
     AuthorModel.find().then(data=>{
         res.json(data);
     })  
}
let getAuthorController= (req,res)=>{
    let authorId=req.query.id
    AuthorModel.findOne({_id:authorId}).then(data=>{
        res.json(data);
    })  
}

module.exports={
    authorsController,
    getAuthorController

}