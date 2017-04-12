var express = require('express');
var router = express.Router();

var GeneralController = require('../Controllers/GeneralController');
var businessController = require('../Controllers/BusinessController');

var Business = require('../Models/BusinessModel'); //take router that has the productname and schedule schema

//search function
router.get('/', function(req, res){
  // res.send('this home page');
	if(req.query.search){
		//gi is a flag (global ignor) to ignore upper or lower cases
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		Business.find({productname:regex} || {schedule:regex} || {gymname:regex}, function(err, businessController){
			if(err){
				console.log(err);
			}else{
				if(businessController.postproducts().length < 1)
				{
					var noMatch = 'No match for this query';
				}
				else if(businessController.uploadGymSchedule().length < 1)
				{
					var noMatch = 'No match for this query';
				}
				res.json('the route to the business product and service', {businessController: businessController.postproducts} || {businessController: businessController.uploadGymSchedule});
			}
		})
	}else{ //show all gym options if there is no search enteries
		return res.send('didnt enter a search variable');
		 Business.find({}, function(err, businessController){
			if(err){
				 console.log(err);
			}else{
				//res.send('print me');
				res.json('the route to the business product and service', {businessController: businessController.postproducts} || {businessController: businessController.uploadGymSchedule});
			}
		})
	}
});

router.get('/Filter', function(req, res){
  res.send('this filter page'); 
});
router.post('/Filter', GeneralController.Filter);

//passing our query (search) to replace it with a regular expression
// matching anything globally that meets the search
function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
