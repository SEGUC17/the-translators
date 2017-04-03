var express = require('express');

var router = express.Router();

var businessController = require('../Controllers/BusinessController');

var Business = require('../Models/BusinessModel'); //take router that has the productname and schedule schema

router.get('/', function(req, res){
	if(req.query.search){
		res.send('didnt enter');
		//gi is a flag (global ignor) to ignore upper or lower cases
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		Business.find({productname:regex} || {schedule:regex} || {gymname: regex}, function(err, allBuiness){
			if(err){
				console.log(err);
			}else{
				if(allBuiness.length < 1)
				{
					var noMatch = 'No match for this query';
				}
				res.render('the route to the business product and service', {business:allBuiness});
			}
		})
	}else{ //show all gym options if there is no search enteries
		res.send('entered');
		 Business.find({}, function(err, allBuiness){
			if(err){
				console.log(err);
			}else{
				//res.send('print me');
				res.send('the route to the business product and service', {business:allBuiness});
			}
		})
	}
});

//passing our query (search) to replace it with a regular expression
// matching anything globally that meets the search
function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
