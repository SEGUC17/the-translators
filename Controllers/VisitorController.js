let visitor = require ('../Models/VisitorModel');
let Gym = require ('../Models/BusinessModel.js');

let VisitorController =  {

	//function to make a visitor register to the website
	createregister:function(req, res){
	  var username = visitor.username;
	  visitor.findOne({username:req.body.username},function(err,user){
	  	if (err){
	  		return done(err);
	  	}

	  	var password = req.body.pwd[0];
	  	var password2 = req.body.pwd[1];
	  	req.checkBody('pwd[0]','passwords donot match').equals(password2);

	  	let visitor = new Visitor(req.body);

		visitor.save(function(err, visitor){
			if (err){
				res.send (err.message)
				console.log(err);
			}
			else {
				console.log(visitor);
				res.render('clientprofile');
			}
		})
	})
	},

	VisitorViewGymPage:function(request, response){
		response.send('hello World');
		var GymName = request.body.GymName_location;
	  	var username = request.body.BusinessUsername ;
	  	Gym.find({userame : BusinessUsername}).toArray(function(err,result){
	  		if(err){
	  			throw err;
	  		}
	  		else if(result.length){
	  		response.render('VisitorView'); // selected page
	  	}else {
	  		console.log("no document found");
	  		response.render('GeneralView'); // homepage
	  	}
	  })
	  }
	}

 // selected gym page
module.exports = VisitorController;
