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
var url = '<YOUR MONGODB CLUSTER>';

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
