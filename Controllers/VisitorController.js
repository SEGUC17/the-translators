let Gym = require ('../Models/BusinessModel');

let VisitorController ={
	//view Gym Page
VisitorViewGymPage:function(req, res){
	// check if the gym is in the database or not
	Gym.findOne({ _GymName_location : req.params.GymName_location },function(err, query){

		 if(err){
			 res.json("this Gym does not exist ");
		 }else if (query) {

			res.json({query});
			 console.log("did it ");
		 }
	 });

}}


  module.exports = VisitorController;
