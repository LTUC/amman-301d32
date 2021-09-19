"use strict";
const mongoose=require("mongoose");
const {bookSchema}=require("./Book.model");
// id (Auto generated)
// title
// descpription

const authorSchema=new mongoose.Schema({
    name:String,
    books:[bookSchema]
});

const AuthorModel=mongoose.model('author',authorSchema);

let seedAuthor=()=>{
    let booksList=[
        {
            title:"Mastery",
            description:"Lorem ipsum......"
        },
        {
            title:"Art of Seduction",
            description:"Lorem ipsum......"
        },
        {
            title:"Humans",
            description:"Lorem ipsum......"
        }
    ]

    let newAuthor=new AuthorModel({
        name:"Robert Greene",
        books:booksList
    })
    newAuthor.save()
}

module.exports={
    seedAuthor,
    AuthorModel
}
