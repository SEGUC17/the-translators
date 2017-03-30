var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('/categorization_Router.js');
var DB_URI = "mongodb://localhost:27017/GymPlatform";

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
app.use(router);

app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
