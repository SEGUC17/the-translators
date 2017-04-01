var express = require('express');

var router = express.Router();
var user = require('../Models/CustomerModel/user');

router.get('/', function(req, res){
  res.console('this page');
});

router.get('/CustomerView', function(request, response){
	response.render('CustomerView');
})


router.post('/CustomerView', function(request, response){
  var id = request.body.id;
	var gymname = request.body.gymname;
	var gymdescription = request.body.gymdescription;
	var gymproduct = request.body.gymproduct;
  var gymrating = request.body.gymrating;
  var gymimgage = request.body.gymimgage;
  var gymschedule = request.body.gymschedule;
  var gymreview = request.body.gymreview;
	db_collection.find({Gymname:gymname}).toArray(function(err,result){
	 if(err){
		 throw err;
	 }
	 else if(result.length)
	 {
		 response.render('CustomerView'); // selected gym page (gympage?)
}else {
	console.log("no document found");
	response.render('GeneralView'); // homepage
}
	});

}); // selected gym page

router.get('/user/:id', function(request , response)
{
  User.findOne({id: req.params.id}, function(err, user){ // not sure of re.param.id yet w momken username 
    res.json(user);
  });
}); //to retrieve name from database




module.exports = router;
