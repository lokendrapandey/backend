const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/college');

let classSchema=({
    name:String,
    age:Number,
    sub:String
})

const dbmodel = new mongoose.model("class", classSchema);

const app = express();
app.use(express.json());

app.post("/postt", async (req,resp)=>{
    let data = new dbmodel(req.body);
    let result = await data.save();
    console.log(data);
    resp.send(result);
})

app.get("/gett", async (req,resp)=>{
    let data = await dbmodel.find();
    resp.send(data);
    console.log(data);
})

app.delete('/delete/:_id', async (req,resp)=>{
    let data = await dbmodel.deleteOne(req.params);
    resp.send(data);
    console.log("deleted");
})

app.put("/update/:_id", async (req,resp)=>{
        let data = await dbmodel.updateOne(
            req.params,
            {$set: req.body}
        )
        resp.send(data);
})



app.listen(4000);