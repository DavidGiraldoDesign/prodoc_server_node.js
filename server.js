const express = require('express'),
    bodyParser = require("body-parser"),
    mongo = require("mongodb"),
    fileUpload = require("express-fileupload"),
    ObjectID = require("mongodb").ObjectID;
//==============================================================================
const app = express();
app.use(fileUpload());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//==============================================================================
var url = 'mongodb://josedavidgm1995:Lespaul#1952@clusterdesign-shard-00-00-kmsdl.mongodb.net:27017,clusterdesign-shard-00-01-kmsdl.mongodb.net:27017,clusterdesign-shard-00-02-kmsdl.mongodb.net:27017/prodoc?ssl=true&replicaSet=ClusterDesign-shard-0&authSource=admin';

var mongoClient = mongo.MongoClient;

var db = null // global variable to hold the database

mongoClient.connect(url, (err, database) => {
    if (!err) {
        console.log("Database connected!");
        db = database;
    }
});

//============================================================================

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log(__dirname);
});

app.get('/user/home', (req, res) => {
   
});


app.post('/login', (req, res) => {
    
});

app.post('/register', (req, res) => {
    
});

app.use("/public", express.static("public"));
app.use("/js", express.static('public/js'));
app.use("/iconos", express.static('public/imgs'));
app.use("/css", express.static('public/css'));

app.listen(process.env.PORT || 5050);
//networksetup -getinfo Ethernet