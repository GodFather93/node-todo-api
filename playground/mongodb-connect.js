const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb Sever');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text:'Eat lunch',
    completed: false
  },(err,result) =>{
    if(err){
      return console.log('Unable to insert Todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
//
db.collection('User').insertOne({
 name:'Surya',
 age: 25,
 location: 'Jaipur'
}, (err,result) =>{
  if(err){
    return console.log('Unable to insert user', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
});


  client.close();
});
