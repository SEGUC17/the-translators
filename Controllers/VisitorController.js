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
					res.send('registration done');
				}
			})
		})
	},


 // view gym page
	VisitorViewGymPage:function(request, response){
    // check if the gym  is in the database or not 
		Gym.findOne({_GymName_location : request.params.GymName_location},function (err, query) {
  if (err){
   res.json("this Gym Does not exists ");
  }
  else if(query){
   res.json({query});
    console.log('did it');
  } 
});
}
}

module.exports = VisitorController;
