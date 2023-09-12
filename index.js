const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'Septembar';
const client = new MongoClient(url);

async function getdata(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('learnDB');
    let response = await collection.find({name:"lokendra"}).toArray();
    console.log(response);
}
getdata();