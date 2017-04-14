let Gym = require ('../Models/BusinessModel');
let Customer = require ('../Models/CustomerModel');

let VisitorController =  {

	//function to make a visitor register to the website
	createregister:function(req, res){
		var username = Customer.username;
		Customer.findOne({username:req.body.username},function(err,user){
			if (err){
				return done(err);
			}
			let visitor = new Customer(req.body);
			visitor.save(function(err, visitor){
				if (err){
					res.send (err.message)
					console.log(err);
				} else {
					console.log(visitor);
					res.redirect('registration done');
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
			else if(result.length)
			{
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
