var express = require('express');
let Gym = require ('../Models/BusinessModel');
var router = express.Router();
var CustomerController = require('../Controllers/CustomerController');

router.get('/', function(req, res){
  res.send('this page');
});

//router.get ('/customerView' , CustomerController.CustomerViewGymPage);

router.get('/customerView',CustomerController.ReviewandRatePage);

//updata data 
//router.put('/review', function(request, res) {

	/*var review = request.body;
  var updreview = {};
  if (review.GymReview)
  {
     updreview.GymReview = review.GymReview ;
  }
  
if (!updreview)
{
  res.status (400);
  res.json ({
    "error" : "Bad Data " 
 });

}
  else {

Gym.update( { GymReview : request.params.GymReview },updreview, {} ,function (err,result){
  if(err)
  {
    res.send(err);
  }
  else {
     res.json (review); 
     
    console.log("review added successfully");
   
  }
});
  
} 
 */
//});


module.exports = router;
