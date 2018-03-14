var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const myMongoose = require('mongoose');
var ObjectId = myMongoose.Schema.Types.ObjectId;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then( (doc) => {
        res.send(doc);
    }, (err) => {
        console.log("Could not save." , err);
        res.status(400).send(err);
    });
});


app.get('/todos' , (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        res.send("ID is not valid !");
    } else {
        Todo.findById({
           '_id': id
        }).then((todos) => {
           res.send(todos);
        });
    }
});

app.listen(3000 , () => {
   console.log("App Started on Port 3000.");
});

module.exports = {app};