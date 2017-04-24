var bcrypt = require('bcryptjs');
var config = require('../config/database');

var product = require('../Models/ProductModel');
var Customer = require ('../Models/CustomerModel');
var Gym = require ('../Models/BusinessModel');

var updateController2 = require('./updateController2');

var qty = 0;

var customerController = {

  getCustomerById: function(id, callback){
        Customer.findById(id,callback);
    },

    getCustomerByUsername: function(username, callback){
        var query = {username: username}
        Customer.findOne(query,callback);
    },


    comparePassword: function(candidatePassword, hash, callback){
        bcrypt.compare(candidatePassword, hash, function(err, isMatch){
            if(err) throw err;
            callback(null, isMatch);
        });
    },

      addCustomer: function(newCustomer, callback){
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newCustomer.password, salt, function(err, hash){
                if(err) throw err;
                newCustomer.password =hash;
                newCustomer.save(callback);
            })
        });
    },


  viewCart: function(req, res){
    /*to find the logged in customer*/
    var user = req.user.id;
    Customer.findOne(getElementById(user), function(err, cust){
    if (err){res.json(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.json("empty, try logging in correctly!!");}
    /*to show me the shopping cart*/
    else if (cust) {res.json(cust.shoppingcart);}
  });
},

  /*adding an item to the shopping cart*/
  addToCart:function(req, res){
    /*to find the logged in customer*/
    var user = req.user.id;
    Customer.findOne(getElementById(user), function(err, cust){
    if (err){res.json(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.json("empty, try logging in correctly!!");}
    /*to push the selected product in the shopping cart array by finding this product*/
    else if (cust) {cust.shoppingcart.unshift(uploadproducts.findOne({prodID: req.body.prodID}, function(err, prod){
        if(err){res.json(err.message);}
        /*if no such product found*/
        else {if(prod ==null){res.json("no such product!!");}
        /*to show me that product*/
        else {if(prod){
          /*to increment the quantity of items in the shopping cart*/
          qty++;
          res.json(cust.shoppingcart);}}}
      }))};
  })},

  /*removing an item from the shopping cart*/
  removeFromCart:function(req, res){
    /*to find the logged in customer*/
    var user = req.user.id;
    Customer.findOne(getElementById(user), function(err, cust){
    if (err){res.json(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.json("empty, try logging in correctly!!");}
    /*to remove the selected product in the shopping cart array by finding this product*/
    else if (cust) {cust.shoppingcart.splice(uploadproducts.findOne({prodID: req.body.prodID}, function(err, prod){
        if(err){res.json(err.message);}
        /*if no such product found*/
        else {if(prod ==null){res.json("no such product!!");}
        /*to show me that product*/
        else {if(prod){
          /*to decrement the quantity of items in the shopping cart*/
          qty--;
          res.json(cust.shoppingcart);}}}
      }))};

})},

    // this function should calculate the sum of all the items in the shopping cart
   CheckoutSum: function(req, res){
    var sum = 0.0;
    var qty = 0;
    for(var i = 0; i< Customer.find(Customer.shoppingcart).length; i++){
    sum += Customer.shoppingcart[i].find({}, doc.getElementById("orderedProduct.price"));
    qty++;
    }
    res.json(sum);
  },
  
shoppingPage: function(req,res){

      uploadproducts.find(
      function(err, shop){
        if(err)
          { console.log('error in shoppingPage');
              res.json(err.message);
          }
          else if(shop){
            res.render("shoppingpage",{shop});
          }

      });
        res.json("done");
  },

  // review and rate page
  ReviewandRatePage: function(request, res) {
    
    Gym.findOne({GymName_location : request.body.GymName_location } , function (err , user)
    {
      if (err)
      {
        res.json(err.message);
      }
      else if (user)
      {
        user.GymReview.unshift(request.body.review);
      }
    })
        
    },
 

  //Taking info from user to update
    updateProfile:function(req,res){
        // creating an new user object if any of the attributes arent in the body
             // it wont update in the updateController

            var incomingReq = new Customer({
                email:req.body.email,
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                age:req.body.age,
                password:req.body.password,
                mobilenumber:req.body.mobilenumber,
                gender:req.body.gender,
            });
            
            updateController2.updateProfile(incomingReq,res);

            //redirecting to customer view
            Customer.find({username :incomingReq.username}).toArray(function(err,result){ //hena 3ashan a3mel redirect hadawar 3ala username
             if(err){
               throw err;
             }
             else
             {
               response.render('CustomerProfile/view'); // selected page
          }
          })

    }
};

module.exports = customerController;