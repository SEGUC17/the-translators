
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Grouter = require('./Routes/GeneralRoutes');
var Brouter = require('./Routes/BusinessRoutes');
var Crouter = require('./Routes/CustomerRoutes');
var Vrouter = require('./Routes/VisitorRoutes');
var router = require ('./Routes/stripeRoutes');

var path = require('path');

var DB_URI = "mongodb://localhost:27017/GymPlatform";

var app = express();
mongoose.connect(DB_URI);
mongoose.Promise = global.Promise ;

var index = require ('./Routes/GeneralRoutes'); // homepage
var tasks = require ('./Routes/VisitorRoutes'); //api 
const cors = require('cors');
app.use(cors());


//view Engine
app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');


//body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use('/public', express.static(__dirname+ "/public"));
app.use(bodyParser.json());

//set static Folder for angular  
app.use(express.static(path.join(__dirname,'client')));


app.use('/', index); //homdbepage
app.use('/api', tasks); //api so we can work with mongo

app.use(Grouter);
app.use(Brouter);
app.use(Crouter);
app.use(Vrouter);
app.use(router);


app.listen(8080, function(){
  console.log("server is listening on port 8080");
})