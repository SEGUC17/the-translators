var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressLayouts = require('express-ejs-layouts');
var eventsCache = require('eventcache');
var flash = require('connect-flash');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var session = require('express-session');

var app = express();

mongoose.Promise = global.Promise;
var DB_URI = "mongodb://localhost:27017/GymPlatform";
mongoose.connect(DB_URI);

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

app.set('view engine', 'ejs');
app.use(expressLayouts);
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

app.use(require('./Routes/GeneralRoutes.js'));
app.use(require('./Routes/BusinessRoutes.js'));
app.use(require('./Routes/CustomerRoutes.js'));
app.use(require('./Routes/VisitorRoutes.js'));

app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
