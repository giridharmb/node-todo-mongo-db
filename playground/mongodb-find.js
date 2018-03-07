
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log("Unable to connected to MongoDB Server.");
    }
    console.log("Connected to MongoDB Server.");

    const db = client.db('TodoApp');

    db.collection("Todos").find({
        _id: new ObjectID('5a9eb6dfc4e32a0ff3d4ad3e')
    })
    .toArray().then( (docs) => {
        console.log("Todos:");
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log("Unable to fetch documents !", err);
    });

    client.close();
    console.log("Connection to DB Closed.");
});