var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var session = require('express-session');
var Grouter = require('./Routes/GeneralRoutes.js');
var Brouter = require('./Routes/BusinessRoutes.js');
var Crouter = require('./Routes/CustomerRoutes.js');
var Vrouter = require('./Routes/VisitorRoutes.js');
var DB_URI = "mongodb://localhost:27017/GymPlatform";

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//for our flash messages
app.use(flash());

//middleware for express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(express.static(__dirname+ '/public'));

//initialization for passport
app.use(passport.initialize());
app.use(passport.session());

//global variables for the flash messages
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
	next();
});

mongoose.connect(DB_URI);
app.use(Grouter);
app.use(Brouter);
app.use(Crouter);
app.use(Vrouter);

app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
