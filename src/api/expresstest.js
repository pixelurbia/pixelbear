var express = require("express");
var app = express();
const MongoClient = require('mongodb').MongoClient;
var cors = require('cors');

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
    
    app.use(cors())
    
    app.get("/url", (req, res, next) => {
        db.collection("inventory").find({ item: 'paper' }).toArray((err, result) => {
        res.json(result);
    });

});



app.listen(3000, () => {
 console.log("Server running on port 3000");
});


 // res.json(["Tony","Lisa","Michael","Ginger","Food"]);


});







