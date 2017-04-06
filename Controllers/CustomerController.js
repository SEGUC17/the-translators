var bcrypt = require('bcryptjs');

let Customer = require('../Models/CustomerModel');

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
	}

	getCustomer:function(req, res){

      // retrieve username of the customer from session
      var username = req.user.username;

      // fetch the logged in customer from the database using the username retrieved
      Customer.findOne({username : username }, function(err,result)
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
}

module.exports = customerController;