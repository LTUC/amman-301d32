"use strict";
const {StudentModel}=require("../models/Stundent.model");

// Retrieve
const getStudentsController=(req,res)=>{
    // Query parameters
    StudentModel.find().then(data=>{
        res.status(200).json(data)
    });
}

const createStudnetController=(req,res)=>{
    // Body
    // this will be a json object that contains username and email
    let studentData=req.body;
    let newStudent= new StudentModel(studentData);
    newStudent.save();
    StudentModel.find({}).then(data=>{res.status(200).json(data)});
}
const deleteStudentController=(req,res)=>{
    // PARAMS
    let studnetID=req.params.id;
    StudentModel.findByIdAndDelete(studnetID).then(()=>{
        StudentModel.find().then(data=>res.json(data));
    });

}

const updateStudentController=async (req,res)=>{
    let studnetID=req.params.id;
    let updatedData=req.body;
    StudentModel.findOne({_id:studnetID}).then(student=>{
        student.username=updatedData.username;
        student.email=updatedData.email;
        student.save();
    });
    let updatedStudentsList=await StudentModel.find({});
    res.status(200).send(updatedStudentsList);
}

module.exports={
    getStudentsController,
    createStudnetController,
    deleteStudentController,
    updateStudentController
}