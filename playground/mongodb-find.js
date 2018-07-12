const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb Sever');
  const db = client.db('TodoApp');

db.collection('User').find({name: 'Surya'}).toArray().then((doc)=>{
  return console.log(JSON.stringify(doc,undefined,2));
}, (err) =>{

  return console.log(err);
})


  client.close();
});
