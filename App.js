const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const BodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/HatOP";
const database_name = "HatOP";

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true}));
var database, collection;

app.listen(5000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(database_name);
        collection = database.collection("Classroom");
        console.log("Connected");
    });
});