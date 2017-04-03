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
}

module.exports = customerController;