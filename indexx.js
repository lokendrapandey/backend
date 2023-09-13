const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/company');

const managerSchema = ({
    name:String,
    age:Number,
    salary:Number
})

const managermodel = new mongoose.model("manager", managerSchema);

const app = express();
app.use(express.json());

app.post("/postt", async (req,resp)=>{
    let data = new managermodel(req.body);
    const result = await data.save();
    resp.send(result);
    console.log(result);
})

app.get("/gett",async (req,resp)=>{
    let data = await managermodel.find();
    console.log(data);
    resp.send(data);
})


app.listen(3000);
