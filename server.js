var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var eventsCache = require('eventcache');
var passport = require('passport');
var path = require('path');
var cors = require('cors');
var config = require('./config/database');

mongoose.Promise=global.Promise;

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

var app = express();

var users = require('./Routes/users');

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

app.use('/users', users);

// Index Route
app.get('/', function(req, res){
  res.send('Invalid Endpoint');
});

//any route added goes to this
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(require('./Routes/GeneralRoutes.js'));
app.use(require('./Routes/BusinessRoutes.js'));
app.use(require('./Routes/CustomerRoutes.js'));
app.use(require('./Routes/VisitorRoutes.js'));

//Start Server
app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
