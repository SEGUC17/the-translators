var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Grouter = require('./Routes/GeneralRoutes.js');
var Brouter = require('./Routes/BusinessRoutes.js');
var Crouter = require('./Routes/CustomerRoutes.js');
var Vrouter = require('./Routes/VisitorRoutes.js');
var DB_URI = "mongodb://localhost:27017/GymPlatform";
var app = express();
//var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

/*app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
   return filename;
 },
}));*/

mongoose.connect(DB_URI);
app.use(Grouter);
app.use(Brouter);
app.use(Crouter);
app.use(Vrouter);

app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
