"use strict";
const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const {
    createCatController, 
    deleteCatController,
    getCatsController}=require("./controllers/Cat.controller");
// const {seedCat,catModel}=require("./models/Cat.model");
app.use(express.json());
app.use(cors());
mongoose.connect(`${MONGO_URL}/catStore`,{useNewUrlParser: true, useUnifiedTopology: true});

app.get('/',getCatsController);
app.post('/create-cat',createCatController);
app.delete('/delete-cat/:id',deleteCatController);
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})

// app.get('/seed-cat',(req,res)=>{
//     // seedCat();
//     catModel.find({}).then(data=>{
//         res.status(200).json(data);
//     })
    
// })