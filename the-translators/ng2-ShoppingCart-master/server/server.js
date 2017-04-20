/* Minimal Node Server for development */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise= global.Promise;
var DB_URI = "mongodb://localhost:27017/GymPlatform";
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

app.get('/api', (req,res) => {
    console.log('get request for route /api')
})

app.get('/api/:id', (req,res) => {
    console.log(req.params.id)
})

mongoose.connect(DB_URI);

app.listen(3000, function() {
    console.log('Listening on PORT: 3000')
})
