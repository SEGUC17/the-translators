
/*requiring an instance from the product and the customer tables in the model folder*/
let product = require('../Models/ProductModel.js');
let customer = require('../Models/CustomerModel.js');


var bcrypt = require('bcryptjs');

let Gym = require ('../Models/BusinessModel.js');


let customerController = {

/*viewing the shopping cart*/
  viewCart: function(req, res){
    customer.find({shoppingcart: req.params.shoppingcart}, function(err, shoppingcart){
      if (err){
        res.send(err.message);}
      else{
        res.json(shoppingcart);}
    });
  },
  /*adding an item to the shopping cart*/
  addToCart:function(req, res){
      customer.find({shoppingcart:req.params.shoppingcart}).unshift(product);
      qty++;
      res.json(qty);
  },
  /*removing an item from the shopping cart*/
  removeFromCart:function(req, res){
      customer.find({shoppingcart:req.params.shoppingcart}).splice(product);
      qty--;
      res.json(qty);
  },







	//getting the username of customers for login
	getCustomerByUsername: function(username, callback){
		var query = {'username' : username};
		customer.findOne(query, callback);
	},

	//getting the id of customers for login
	getCustomerById: function(id, callback){
		customer.findById(id, callback);
	},

	//comparing passwords of customer for login
	comparePassword: function(candidatePassword, hash, callback){
		bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		    if(err) throw err;
		    callback(null, isMatch);
		});
	},

	getCustomer:function(req, res){

      // retrieve username of the customer from session
      var username = req.user.username;

      // fetch the logged in customer from the database using the username retrieved
      customer.findOne({username : username }, function(err,result)
      {
          // handle error
          if(err){
            throw err;
          }
          // show 404 status if no result returned
          else if(!result){
            res.status(404).send('Not found');
          }
          // redirect to the CustomerView page and send the customer object fetched
          else
          {
            res.render ('CustomerView', {customer: result});
          }

      })
    }

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

/*exporting the controller*/
module.exports = customerController;

