let Gym = require ('../Models/BusinessModel');

let CustomerController ={
CustomerViewGymPage:function(req, res){


Gym.findOne({_GymName_location : req.params.GymName_location },function(err, query){
	//Gym.find(function (err, query) {

		 if(err){
			 console.log("this Gym doesnot exist ");
		 }
     else if (query) {

			res.send({query});
			 console.log("did it ");
		 }
	 });
},
//view Gym Page
 
 ReviewandRatePage: function(request, res) {
   var review = request.body;
 
    Gym.findOne({GymName_location : request.params.GymName_location } , function (err , user)
    {
      if (err)
      {
        res.send("this Gym does not exist");
      }
      else if ( {BusinessUsername : request.params.BusinessUsername})
      {
        review.unshift({GymReview:request.params.GymReview});
      }

      else {
        res.send("you have to logged in first ");
      }
    });
    }
 // review and rate page

  }

  module.exports = CustomerController;
