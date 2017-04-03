var bcrypt = require('bcryptjs');

let Business = require('../Models/BusinessModel');

let businessController = {

	//getting the username of business owner for login
	getBusinessByUsername: function(username, callback){
		var query = {'username' : username};
		Business.findOne(query, callback);
	},

	//getting the id of business owner for login
	getBusinessById: function(id, callback){
		Business.findById(id, callback);
	},

	//comparing passwords of business owner for login
	comparePassword: function(candidatePassword, hash, callback){
		bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		    if(err) throw err;
		    callback(null, isMatch);
		});
	}
}

module.exports = businessController;