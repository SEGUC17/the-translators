var bcrypt = require('bcryptjs');

let Customer = require('../Models/CustomerModel');

let customerController = {

	getCustomerByUsername: function(username, callback){
		var query = {'username' : username};
		Customer.findOne(query, callback);
	},

	getCustomerById: function(id, callback){
		Customer.findById(id, callback);
	},

	comparePassword: function(candidatePassword, hash, callback){
		bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		    if(err) throw err;
		    callback(null, isMatch);
		});
	}
}

module.exports = customerController;