let Gym = require ('../Models/BusinessModel.js');

let CustomerController = {
CustomerViewGymPage: function(request, response){
  //res.send("hello visitor");
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
  Gym.findOne({BusinessUsername: request.params.BusinessUsername}, function(err, user){
    response.json(user)});
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
	Business.insert({review :GymReview , rate : GymRating });
	res.render('CustomerView');

} // review and rate page

};

module.exports = CustomerController;
