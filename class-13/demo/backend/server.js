"use strict";

const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const mongoose=require("mongoose");
const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const {
    getStudentsController,
    createStudnetController,
    deleteStudentController,
    updateStudentController

}=require("./controllers/Student.contorller");
mongoose.connect(`${MONGO_URL}`,{useNewUrlParser: true, useUnifiedTopology: true});
// to be able to capture the post req body use the below line of code
app.use(express.json());
app.use(cors());
app.get("/students-list",getStudentsController);
app.post("/create-student",createStudnetController);
app.delete("/delete-student/:id",deleteStudentController);
app.put("/update-student/:id",updateStudentController);

app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})