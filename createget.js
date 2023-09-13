const mongoose = require('mongoose');
const express = require('express');

mongoose.connect("mongodb://127.0.0.1/lnctstudent");

const lnctstudentSchema = ({
    name:String,
    year:Number
})

const db = mongoose.model("dbs",lnctstudentSchema);

const app = express();
app.use(express.json()); // convert into json

app.post("/create",async (req,resp)=>{
    let data = new db(req.body);
    const result = await data.save();
    resp.send(result)
    console.log(result)
})

app.get("/lndata",async (req,resp)=>{
    let data = await db.find();
    console.log(data);
    resp.send(data);
})

app.listen(4000);