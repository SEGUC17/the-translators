<<<<<<< HEAD
let Business = require('../Models/BusinessModel');
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
let uploadproducts = require ('../Models/ProductModel');


let BusinessController = {

  createproduct:function(req,res){
 let prod = new uploadproducts();
},
 postproducts:function(req,res){
   let products = new Products(req.body);
   //var products = new Array();
   products.post(function(err, products){
      if(err){
       res.send(err.message);
       console.log(err.message);
     }
     else{
       console.log( document.getElementById().innerHTML = products );
       res.render('businesshomepage');
     }    });
   uploadproducts.update(function(err, products){
      if(err){
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
		Gym.findOne(query, callback);
	},

	//getting the id of business owner for login
	getBusinessById: function(id, callback){
		Gym.findById(id, callback);
	},

	//comparing passwords of business owner for login
	comparePassword: function(candidatePassword, hash, callback){
		bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		    if(err) throw err;
		    callback(null, isMatch);
		});
	},
  // this function should allow the business owner to edit his already existing products
    editproducts: function (req,res){
        uploadproducts.findOne({username: req.body.username},
        function(error, document){
          if(error)
            { console.log('error in edit products');
                document.json(error.message);
            }
            else{
                if(document)
                {
                    if(req.prodname)
                    {
                        document.prodname = req.body;
                    }
                    if(req.price)
                    {
                        document.price = req.body;
                    }
                    if(req.image)
                    {
                        document.image = req.body;
                    }
                    if(req.ProductDescription)
                    {
                        document.ProductDescription = req.body;
                    }

    }
      //then save the changed data and save it to the designated table
      //uploadproducts.markModified('image');
      uploadproducts.update(function(err,res){

      if(err){
        JSON.stringify(err.message);
        res.json(err.message);
        console.log(err.message);
      }
      else{
        console.log(res);
        JSON.stringify("this is edit products official");

      }
    });
  }
}
)}
  }
=======
let Business = require('../Models/BusinessModels');
let uploadproducts = require ('../Models/ProductModel.js');

var bcrypt = require('bcryptjs');

//function to upload products
let BusinessController =
{

  createproduct:function(req,res){
    let prod = new uploadproducts();
  },

  postproducts:function(req,res){
    let products = new Products(req.body);

    //var products = new Array();
    products.post(function(err, products){
        if(err){
          res.send(err.message);
          console.log(err.message);
       }
       else{
         console.log( document.getElementById().innerHTML = products );
         res.render('businesshomepage');
       }
     });
     uploadproducts.save(function(err, products){
      if(err){
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
    if(err){
      res.send(err.message);
    }
    else{
      res.send('Subscription successful');                  }
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
  else{
    res.render ('BusinessView', {business: result});
  }
})
}
}


module.exports = BusinessController;
