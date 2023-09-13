const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/class");

const studentsSchema=({
    name:String,
    class:Number,
    age:Number
})

const studentsModel = new mongoose.model("students", studentsSchema);

const app = express();
app.use(express.json());

app.post("/postt", async (req,resp)=>{
    let data = new studentsModel(req.body);
    let result = await data.save();
    resp.send(result);
    console.log(result);
})

app.get("/gett",async (req,resp)=>{
    let result =  await studentsModel.find();
    resp.send(result);
    console.log(result);

})
app.listen(6000);
