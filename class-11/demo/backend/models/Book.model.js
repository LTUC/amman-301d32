"use strict";
const mongoose=require("mongoose");
// id (Auto generated)
// title
// descpription

const bookSchema=new mongoose.Schema({
    title:String,
    description:String,
});

const bookModel=mongoose.model('book',bookSchema);

let seedBook=()=>{
    let newBook=new bookModel({
        title:"48 laws of power",
        description:"a book authered by Rob Greene and it talks about political stuff"
    });
    newBook.save();
}

module.exports={
    bookSchema
}
