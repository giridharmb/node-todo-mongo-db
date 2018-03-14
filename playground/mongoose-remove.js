const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var ObjectId = mongoose.Schema.Types.ObjectId;

// Removes everything
//Todo.remove({}).then((result) => {
//   console.log(result);
//});


// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

var stringId = '﻿5aa903c76dcf12bbf6e709d5';
var id = new ObjectId('﻿5aa903c76dcf12bbf6e709d5');


Todo.findById(stringId).then((todo) => {
    console.log(todo);
    console.log('Document Removed !');
});


/*
Todo.findOneAndRemove({_id : id._id}, function(err, obj) {
    if (err) {
        return console.log(err);
    }
    console.log('findByIdAndRemove doc: ', obj)
});
*/



