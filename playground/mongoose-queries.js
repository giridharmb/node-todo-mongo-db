const {ObjectID} = require('mongodb');
const myMongoose = require('mongoose');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var stringId = '5aa77205c8fbdc553dad0c2d';

var ObjectId = myMongoose.Schema.Types.ObjectId;

if(!ObjectID.isValid(stringId)) {
    console.log("ID is not valid !");
} else {
    Todo.findById({
       '_id': stringId
    }).then((todos) => {
       console.log('Todos:' , todos);
    });
}





