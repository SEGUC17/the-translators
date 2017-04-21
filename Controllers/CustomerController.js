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

   var review = "the service is good "; // when making the link 
   var user = user.username; 
 
    Gym.findOne({ _GymName_location : request.params.GymName_location } , function (err , user)
    {
      if (err)
      {
        console.log("error");
        res.json("this Gym does not exist");
      }
      else if (request.user)
      {
   
           //kalam el fe el text box 
           //update the comment in the Gymreview array and prevent the duplication of the comments in the database
     Gym.update({ $addToSet:{ GymReview: review } },function (err , user)
    {
      if (err)
      {
        res.json(" error can not add the review ");
      }
      else{
        console.log(" review added successfully !!");}

      }); 
    }
    else {
      res.json(" you have to loggin first before make a comment "); 
    }
    

   });
  }
}

  module.exports = CustomerController;
