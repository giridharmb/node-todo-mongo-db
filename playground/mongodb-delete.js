
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log("Unable to connected to MongoDB Server.");
    }
    console.log("Connected to MongoDB Server.");

    const db = client.db('TodoApp');

    db.collection("Todos").findOneAndDelete({completed: true}).then( (result) => {
        console.log(result);
    });

    client.close();
    console.log("Connection to DB Closed.");
});