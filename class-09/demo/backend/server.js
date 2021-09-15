"use strict";
const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const PORT=process.env.PORT;
const usersController=require("./controllers/User.controller");
const clubController=require("./controllers/Club.controller");

app.use(cors());
app.get("/",(req,res)=>{
    res.json({
        "message":"Welcome..."
    })
});
app.get("/users",usersController);
app.get("/club",clubController);

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
});

