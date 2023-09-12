const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Septembar");
const express = require('express');

const app = express();


const LearnDBschema = new mongoose.Schema({
    name:String,
    surname:String,
    age:Number
});

const LearnDBmodel = mongoose.model('learnDB', LearnDBschema);  


const main = async()=>{
    let data = new LearnDBmodel({name:"lokendra", surname:"pandey", age:555});
    const result = await data.save(); 
    console.log(result);
}
main();  



  async function updatedb(){
    const LearnDBmodel = mongoose.model('learnDB', LearnDBschema);  
    let data =  await LearnDBmodel.updateMany(
        { age:555},
        { $set:{ age:1}}
    )
    console.log(data);   
}
updatedb();






