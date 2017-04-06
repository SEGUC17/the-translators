let Business = require('../Models/BusinessModels');
var bcrypt = require('bcryptjs');
let uploadproducts = require ('../Models/ProductModel.js');

//function to upload products
let BusinessController = {
createproduct:function(req,res){
 let prod = new uploadproducts();
},
 postproducts:function(req,res){
   let products = new Products(req.body);
   //var products = new Array();
   products.post(function(err, products){      if(err){
       res.send(err.message);
       console.log(err.message);
     }
     else{
       console.log( document.getElementById().innerHTML = products );
       res.render('businesshomepage');
     }    });
   uploadproducts.save(function(err, products){      if(err){
       res.send(err.message)
       console.log(err);
     }
     else{
       console.log(products);
       res.render('businesshomepage');
     }
   }) 
    },

    ymsubscription: function(req, res){
            var gymSubscribe = new gym(req.body);
            gymSubscribe.save(function(err, gymsubscription){
                if(err)
                    res.send(err.message);
                else{
                    res.send('Subscription successful');
                    //res.redirect('/'); //redirect to business owner home page
                }
            })
        },
//this method is for business owners to upload schedule on their profile.
        uploadGymSchedule: function(req, res){
            gym.findOne({username: req.user.username},
                function (err, uploadschedule){
                    if(err){
                    res.json(err.message);
                }
                else{
                    if(uploadschedule){
                        if(req.body){
                                console.log(uploadschedule)
                        }
                        gym.save(req.body.schedules);
                    }
                }
            })
        },

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

module.exports = BusinessController;
