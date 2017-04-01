var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.console('this page');
});

app.post(‘/api/photo’,function(req,res){
 var newItem = new VisitorSchema();
 newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
 newItem.img.contentType = ‘image/png’;
 newItem.save();
});

router.get('/VisitorView', function(request, response){
	response.render('VisitorView');
})


router.post('/VisitorView', function(request, response){
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
		 response.render('VisitorView'); // selected page
}else {
	console.log("no document found");
	response.render('GeneralView'); // homepage
}
	});

}); // selected gym page





module.exports = router;
