var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Grouter = require('./Routes/GeneralRoutes.js');
var Brouter = require('./Routes/BusinessRoutes.js');
var Crouter = require('./Routes/CustomerRoutes.js');
var Vrouter = require('./Routes/VisitorRoutes.js');
var DB_URI = "mongodb://localhost:27017/GymPlatform";

var Schema = mongoose.Schema;
var multer = require('multer');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
app.use(Grouter);
app.use(Brouter);
app.use(Crouter);
app.use(Vrouter);

app.use(multer({ dest: ‘./uploads/’,
 rename: function (fieldname, filename) {
   return filename;
 },
})); //add the multer so that to destinguish the path of the gym/schedule photos

/*MongoClient.connect(DB_URI,function(err,db)
{
  if(err){
  throw err;
}
  else {
    console.log("Mongo db Connected");
  }
  var collection = db.collection('Customer');
  db_collection = collection;
  collection.find({}).toArray(function(err,result){
   if(err){
     throw err;;
   }
   else if(result.length)
   {
     module.exports = db;
     console.log("did it");
}else {
  console.log("no document found");
}
  });
});
*/
app.listen(8080, function(){
  console.log("server is listening on port 8080");
})
