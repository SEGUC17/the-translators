var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.console('this page');
});
router.get('/CustomerView', function(request, response){
	response.render('CustomerView');
})


router.post('/CustomerView', function(request, response){
  //res.send("hello visitor");
	var GymName = request.body.GymName;
  var username = request.body.BusinessUserName ;
	db_collection.find({userame : BusinessUserName}).toArray(function(err,result){
	 if(err){
		 throw err;
	 }
	 else if(result.length)
	 {
		 response.render('CustomerView'); // selected page
}else {
	console.log("no document found");
	response.render('GeneralView'); // homepage
}
	});

}); // selected gym page


router.get('/user/BusinessUserName', function(request , response)
{
  User.findOne({BusinessUserName: request.params.BusinessUserName}, function(err, user){
    response.json(user);
  });
}); //to retrieve name from database



router.post('/CustomerView', function(request, res) {
	console.log(request.body.BusinessUserName);
	var username = request.body.BusinessUserName;
	var GymName = request.body.GymName;
	var GymProduct = request.body.GymProduct;
  var GymReview = request.body.GymReview;
  var GymRating = request.body.GymRating;
	var document = { gymReview : GymReview, gymRating: GymRating};
	db_collection.insert({review :GymReview , rate : GymRating });
	res.render('CustomerView');

}); // review and rate page


router.get('/CustomerView', function(request, response){
  response.render('CustomerView'); // review and rate page
});



module.exports = router;
