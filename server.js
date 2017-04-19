var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Grouter = require('./Routes/GeneralRoutes');
var Brouter = require('./Routes/BusinessRoutes');
var Crouter = require('./Routes/CustomerRoutes');
var Vrouter = require('./Routes/VisitorRoutes');
var path = require('path');

var DB_URI = "mongodb://localhost:27017/GymPlatform";

var app = express();
mongoose.connect(DB_URI);
mongoose.Promise = global.Promise ;

var index = require ('./Routes/GeneralRoutes'); // homepage
var tasks = require ('./Routes/VisitorRoutes'); //api 


//view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//app.use(express.static(__dirname+ '/public'));


//set static Folder (put angular stuff)
app.use(express.static(path.join(__dirname,'client')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/src/index.html'));
// });
app.use('/', index); //homdbepage
app.use('/api', tasks); //api so we can work with mongo

app.use(Grouter);
app.use(Brouter);
app.use(Crouter);
app.use(Vrouter);

app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
