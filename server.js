var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var eventsCache = require('eventcache');
var Grouter = require('./Routes/GeneralRoutes.js');
var Brouter = require('./Routes/BusinessRoutes.js');
var Crouter = require('./Routes/CustomerRoutes.js');
var Vrouter = require('./Routes/VisitorRoutes.js');
var DB_URI = "mongodb://localhost:27017/GymPlatform";

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
app.use(Grouter);
app.use(Brouter);
app.use(Crouter);
app.use(Vrouter);

app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
