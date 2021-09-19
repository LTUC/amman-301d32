"use strict";

const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
app.use(cors());
const PORT =process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER
// const {seedBook}=require("./models/Book.model");
const {seedAuthor}=require("./models/Author.model");
const {authorsController,getAuthorController}=require("./controllers/author.controller");
mongoose.connect(`${MONGO_SERVER}/bookStore`,{useNewUrlParser: true, useUnifiedTopology: true});
// app.get('/seed-data',(req,res)=>{
//     seedAuthor();
//     res.json({
//         "message":"Author Object Created succefully"
//     })

// })
app.get('/get-data',authorsController);
app.get('/get-author',getAuthorController);


app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})