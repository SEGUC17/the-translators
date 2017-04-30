var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var eventsCache = require('eventcache');
var passport = require('passport');
var path = require('path');
var cors = require('cors');
var config = require('./config/database');

//Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function() {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', function(err){
  console.log('Database error: '+err);
});

mongoose.Promise=global.Promise;

var app = express();

// CORS Middleware request for our api from different place
app.use(cors());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


// Index Route
app.get('/', function(req, res){
  res.send('Invalid Endpoint');
});

//any route added goes to this
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(require('./app/Routes/GeneralRoutes.js'));
app.use(require('./app/Routes/BusinessRoutes.js'));
app.use(require('./app/Routes/CustomerRoutes.js'));
app.use(require('./app/Routes/VisitorRoutes.js'));
app.use(require('./app/Routes/users.js'));

//Start Server
app.listen(8080, function(){ //process.env.Port
  console.log("server is listening on port 8080");
})
