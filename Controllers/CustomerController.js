let Gym = require ('../Models/BusinessModel');

let CustomerController ={
CustomerViewGymPage:function(req, res){


Gym.findOne({ _GymName_location : req.params.GymName_location },function(err, query){

		 if(err){
			 console.log("this Gym doesnot exist ");
		 }
     else if (query) {

			res.json({query});
			 console.log("did it ");
		 }
	 });
},
//view Gym Page
 
 ReviewandRatePage: function(request, res) {

   var review = "this gym ya3"; // when making the link 

   // if statement of log in 
    Gym.findOne({ _GymName_location : request.params.GymName_location } , function (err , user)
    {
      if (err)
      {
        console.log("error");
        res.json("this Gym does not exist");
      }
      else 
      {   
           //kalam el fe el text box 
     Gym.update({ $addToSet:{ GymReview: review } },function (err , user)
    {
      if (err)
      {
        console.log("error can not add review ");
      }
      else{
        console.log(" review added successfully !!");}

      }); 
    }
  // review and rate page

   });
  }
}

  module.exports = CustomerController;
