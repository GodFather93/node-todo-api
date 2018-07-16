const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb Sever');
  const db = client.db('TodoApp');

db.collection('Todos').findOneAndDelete({_id: new ObjectId("5b46fff43d89a902fd684705")}).then((result)=>{
  return console.log(result);
}, (err) =>{

  return console.log(err);
})

db.collection('Todos').findOneAndUpdate()
  client.close();
});
