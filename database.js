const mongoose = require('mongoose');
const {model} = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/newdb"); 
const express = require('express');

const dbSchema = new mongoose.Schema({
    name:String,
    surname:String,
    price:Number
})

const db = new mongoose.model('db', dbSchema);

const app = express();
app.use(express.json()); // convert into json

app.post('/create', async (req,resp)=>{
    let data = new db(req.body);
    const result = await data.save();
    resp.send(result)
    console.log(result)
})

app.get("/data", async (req,resp)=>{
    let data = await db.find();
    console.log(data);
    resp.send(data)
})


app.listen(6262);