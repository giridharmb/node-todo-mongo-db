
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log("Unable to connected to MongoDB Server.");
    }
    console.log("Connected to MongoDB Server.");

    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name:'Giri',
        age: 35,
        location: 'Bangalore'
    }, (err, result) => {
        if(err) {
            return console.log("Unable to insert Users.", err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    });

    client.close();
    console.log("Connection to DB Closed.");
});