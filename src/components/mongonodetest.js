const MongoClient = require('mongodb').MongoClient;

// Connect URL
const url = 'mongodb://127.0.0.1:27017';

// Connec to MongoDB
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }
 
 console.log(`MongoDB Connected: ${url}`);
 

    // Specify database you want to access
    const db = client.db('inventory');
    

    db.collection("inventory").find({ item: 'paper' }).toArray((err, result) => {
      console.log(result);
    });

});