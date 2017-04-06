var bcrypt = require('bcryptjs');

let Customer = require('../Models/CustomerModel');
let Gym = require ('../Models/BusinessModel.js');

let customerController = {

	//getting the username of customers for login
	getCustomerByUsername: function(username, callback){
		var query = {'username' : username};
		Customer.findOne(query, callback);
	},

	//getting the id of customers for login
	getCustomerById: function(id, callback){
		Customer.findById(id, callback);
	},

	//comparing passwords of customer for login
	comparePassword: function(candidatePassword, hash, callback){
		bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		    if(err) throw err;
		    callback(null, isMatch);
		});
	},
	
CustomerViewGymPage: function(request, response){
response.send("hello visitor");
	var GymName = request.body.GymName_location;
  var username = request.body.BusinessUsername ;
	Gym.find({userame : BusinessUsername}).toArray(function(err,result){
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
})
}, // selected gym page


RetrieveUsername: function(request ,response)
{
	//response.send('hello mariam');
  Gym.findOne({BusinessUsername: request.params.BusinessUsername}, function(err, user){
    response.json(Gym)});
},
 //to retrieve name from database


ReviewandRatePage: function(request, res) {

	console.log(request.body.BusinessUsername);
	var username = request.body.BusinessUsername;
	var GymName = request.body.GymName_location;
	var GymProduct = request.body.ProdList;
  var GymReview = request.body.GymReview;
  var GymRating = request.body.GymRating;
	var document = { gymReview : GymReview, gymRating: GymRating};
	Gym.insert({review :GymReview , rate : GymRating });
	res.render('CustomerView');

} // review and rate page

};

module.exports = customerController;
