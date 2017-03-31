var bcrypt = require('bcryptjs');

let Business = require('../Models/BusinessModel');

let businessController = {

	getBusinessByUsername: function(username, callback){
		var query = {'username' : username};
		Business.findOne(query, callback);
	},

	getBusinessById: function(id, callback){
		Business.findById(id, callback);
	},

	comparePassword: function(candidatePassword, hash, callback){
		bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		    if(err) throw err;
		    callback(null, isMatch);
		});
	}
}

module.exports = businessController;