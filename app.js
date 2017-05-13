var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var randomstring = require('randomstring');
var port=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('views'));

app.set('view engine', 'html')
app.set('views', 'views')
app.engine('html', require('ejs').renderFile);

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

var rider = mongoose.Schema({
    id:String,
    password:String,
    driverId:String,
    userLocation:String,
    driverXLocation:String,
    driverYLocation:String,
    userXLocation:String,
    userYLocation:String
});

var riderModel = mongoose.model('riderModel',rider);


mongoose.connect('mongodb://localhost:27017/test') ;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Mongo On");
});

require('./routes/user')(app, riderModel,randomstring)
require('./routes/rider')(app, riderModel,randomstring)


app.listen(port,function(){
    console.log("Port "+port+" Connection");
})

