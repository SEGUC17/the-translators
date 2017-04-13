let Gym = require ('../Models/BusinessModel.js');

let VisitorController ={
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

 // selected gym pages
module.exports = VisitorController;
