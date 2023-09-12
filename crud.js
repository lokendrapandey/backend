const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();

app.use(express.json()); // for convert data into json from postmain

// get api
app.get('/', async (req, resp) => {
    let data =  await dbConnect();
    data = await data.find().toArray();
    console.log(data);  
    // resp.send({ name: 'shivam' })
    resp.send(data)
});


// post api
app.post('/', async(req,resp)=>{

    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);


    // console.log(req.body)
    // resp.send({name:'shivam'});
    // resp.send(req.body); // for direct send data on the postmain
})

// put api
app.put('/', async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:"chacha"},
        // {$set:{name:"chutiya"}}// for direct database 
        {$set:req.body}
        )
    // console.log(req.body);
    resp.send({result:"update"})
})


// delete api
app.delete('/:id', async (req,resp)=>{
        console.log(req.params.id);
        let data = await dbConnect() ;
        let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
        resp.send(result);
})

app.listen(5000)