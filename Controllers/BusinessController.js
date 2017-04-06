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
	},

	getBusiness:function(req, res){

      // retrieve the username of the business from the session
      var username = req.user.username;

      // fetch the logged in business from the database using the username rerieved
      Business.findOne({username : username },function(err,result)
      {
          // handle error
          if(err){
            throw err;
          }
          // show 404 status if no result returned
          else if(!result){
            res.status(404).send('Not found');
          }
          // redirect to the BusinessView page and send the business object fetched
          else
          {
            res.render ('BusinessView', {business: result});
          }

      })
    }
}

module.exports = businessController;