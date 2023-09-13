const { model } = require("mongoose");
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Septembar"); 
const express = require('express');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    
})

const Product = new mongoose.model("Product", productSchema)

const app = express();
app.use(express.json());

// app.post('/create', async (req,resp)=>{

//         let data = new Product(req.body);
//         let result = await data.save();
//         console.log(result);
//         resp.send(result);

//     // console.log(req.body);
//     // resp.send("done");

// })  

// app.get('/list',async (req,resp)=>{
//     let data = await Product.find();
//     resp.send(data);
// })
// app.delete('/delete/:_id',async (req,resp)=>{
//     // console.log(req.params);
//     let data = await Product.deleteOne(req.params);
//     resp.send(data);
// })


// app.put('update/:_id', async (req,resp)=>{
//     console.log(req.params)
//     let data = await Product.updateone(
//         req.params,
//         {$set: req.body}
//     )
//     resp.send(data);
// })


// search api 
// app.get('/search/:key',async (req,resp)=>{
//     console.log(req.params.key);
//     let data = await Product.find
//     ({
//         "$or":[
//             {"na me":{$regex:req.params.key}},
//             {"brand":{$regex:req.params.key}},
//             {"price":{$regex:req.params.key}},
//         ]
//     })
//     resp.send(data);
// })
app.listen(5000);

