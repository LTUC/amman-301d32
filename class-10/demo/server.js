"use strict";
const express=require("express");
const server=express();
const cors=require("cors");
require("dotenv").config();
const PORT=process.env.PORT;
const axios=require("axios");
const { response } = require("express");
const Cache=require("./helpers/cache");
server.use(cors());
let cache=new Cache();

server.get("/",(req,res)=>{
    res.send("hello world")
})

server.get("/data",(req,res)=>{
    let currentDate=new Date()
    console.log("cache date",cache.date.getDate());
    if(cache.data.length>0 && cache.date.getDate()===currentDate.getDate()){
        res.json({"data":cache,"message":"data retrieved from the cache"});
    }else{
        axios.get('https://jsonplaceholder.typicode.com/todos/').then(response=>{
            cache.data=response.data;
            cache.date=currentDate;
            res.json({"data":cache.data,"message":"data is coming from the api"});
        })
    }
})

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});
