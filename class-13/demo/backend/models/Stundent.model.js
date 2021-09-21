"use strict";
const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    username:String,
    email:String
});

const StudentModel=mongoose.model('Student',studentSchema);

// const seedStudentData=()=>{
//     let studentData= new StudentModel({
//         username:"test student",
//         email:"test@test.com"
//     });
//     studentData.save();
//     return studentData;
// }

module.exports={
    StudentModel
}