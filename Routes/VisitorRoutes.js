var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.console('this page');
});

router.get('/VisitorView', function(request, response){
	response.render('VisitorView');
})


router.post('/VisitorView', function(request, response){
  res.send("hello visitor");
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




module.exports = router;
