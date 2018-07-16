const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5b4c42196bfca502f719473a';
Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos:',todos);
});

Todo.findOne({ _id: id }).then((todos)=>{
  console.log('Todos:', todos);
});


User.findById('5b4c743835d4b705fca5463e').then((user)=>{
  if(!user){
    console.log('Uable to find user');
  }
  console.log(JSON.stringify(user, undefined,2));
},(e)=>{
  console.log(e);
})
