let Gym = require ('../Models/BusinessModel');

let VisitorController ={
VisitorViewGymPage:function(req, res){

	Gym.findOne({_GymName_location : req.params.GymName_location },function(err, query){

		 if(err){
			 console.log("this Gym doesnot exist ");
		 }else if (query) {

			res.send({query});
			 console.log("did it ");
		 }
	 });

}}
//view Gym Page

  module.exports = VisitorController;
