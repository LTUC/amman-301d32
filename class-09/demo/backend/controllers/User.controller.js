"use strict";
const User=require("../models/User.model");
const usersData=require("../data/users.json");

const usersController=(req,res)=>{
    let salary=req.query.salary;
    let hiredCoaches=usersData.map(user=>{
        return new User(user.name,user.age,salary);
    })
    res.json(hiredCoaches)
}

module.exports=usersController;