
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log("Unable to connected to MongoDB Server.");
    }
    console.log("Connected to MongoDB Server.");

    const db = client.db('TodoApp');

    var my_query = {text : 'Walk the cat'};

    var new_values = { $set : {text : 'Walk the dog' }};

    try {
        db.collection('Todos').updateOne(my_query, new_values, function(err, res) {
           if(err) {
               throw err;
           }
           console.log('One Document Updated');
        });

    } catch (e) {
        console.log(`Error in updating document : my_query : ${my_query} , new_values : ${new_values}`);
        console.log(e);
    }

    client.close();
    console.log("Connection to DB Closed.");
});

