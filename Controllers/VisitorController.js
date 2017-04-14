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

		Gym.find({}).exec(function(err, result) {
		 if (!err) {
			 var query = Gym.find({'GymName_location': 'smart'});
			// query.select('GymName_location');
			 query.exec(function(err, result) {
				 if (!err) {
					 console.log(Gym.GymName_location);

					 console.log("did it");
				 } else {
					 console.log("Error in second query");
				 }
			 });
		 } else {
			 console.log("Error in first query" );
		 }
			 });
		}
}

 // selected gym page
module.exports = VisitorController;
