const url = "mongodb://127.0.0.1:27017//learnDB";
const {MongoClient} = require('mongodb');

const database = 'Septembar';
const client = new MongoClient(url); 

async  function dbConnect()
{
    let result = await client.connect();
     let db = result.db(database)
    return db.collection('learnDB');
}
module.exports= dbConnect;