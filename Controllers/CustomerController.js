var bcrypt = require('bcryptjs');
var config = require('../config/database');

let product = require('../Models/ProductModel');
let Customer = require ('../Models/CustomerModel');
let Gym = require ('../Models/BusinessModel');

let updateController2 = require('../Controllers/updateController2');

var qty = 0;

let customerController = {

  viewCart: function(req, res){
    /*to find the logged in customer*/
    var user = req.user.id;
    Customer.findOne(getElementById(user), function(err, cust){
    if (err){res.send(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.send("empty, try logging in correctly!!");}
    /*to show me the shopping cart*/
    else if (cust) {res.send(cust.shoppingcart);}
  });
  },
  /*adding an item to the shopping cart*/
  addToCart:function(req, res){
    /*to find the logged in customer*/
    var user = req.user.id;
    Customer.findOne(getElementById(user), function(err, cust){
    if (err){res.send(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.send("empty, try logging in correctly!!");}
    /*to push the selected product in the shopping cart array by finding this product*/
    else if (cust) {cust.shoppingcart.unshift(uploadproducts.findOne({prodID: req.body.prodID}, function(err, prod){
        if(err){res.send(err.message);}
        /*if no such product found*/
        else {if(prod ==null){res.send("no such product!!");}
        /*to show me that product*/
        else {if(prod){
          /*to increment the quantity of items in the shopping cart*/
          qty++;
          res.send(cust.shoppingcart);}}}
      }))};
  })},
  /*removing an item from the shopping cart*/
  removeFromCart:function(req, res){
    /*to find the logged in customer*/
    var user = req.user.id;
    Customer.findOne(getElementById(user), function(err, cust){
    if (err){res.send(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.send("empty, try logging in correctly!!");}
    /*to remove the selected product in the shopping cart array by finding this product*/
    else if (cust) {cust.shoppingcart.splice(uploadproducts.findOne({prodID: req.body.prodID}, function(err, prod){
        if(err){res.send(err.message);}
        /*if no such product found*/
        else {if(prod ==null){res.send("no such product!!");}
        /*to show me that product*/
        else {if(prod){
          /*to decrement the quantity of items in the shopping cart*/
          qty--;
          res.send(cust.shoppingcart);}}}
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
        res.send("done");
  },



   //retreiving customer account using ID
  getCustomerById: function(id, callback){
        Customer.findById(id,callback);
    },

    //checking if customer exists by username

    getCustomerByUsername: function(username, callback){
        var query = {username: username}
        Customer.findOne(query,callback);
    },

        //to add a new customer in the database
    addCustomer: function(newCustomer, callback){
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newCustomer.password, salt, function(err, hash){
                if(err) throw err;
                newCustomer.password =hash;
                newCustomer.save(callback);
            })
        });
    },


    //to verify password
    comparePassword: function(candidatePassword, hash, callback){
        bcrypt.compare(candidatePassword, hash, function(err, isMatch){
            if(err) throw err;
            callback(null, isMatch);
        });
    },

  ReviewandRatePage: function(request, res) {
    //console.log(request.user.BusinessUsername); // retrieve name from databse
    //var User = request.user.BusinessUsername;
    Gym.findOne({GymName_location : request.body.GymName_location } , function (err , user)
    {
      if (err)
      {
        res.send(err.message);
      }
      else if (user)
      {
        user.GymReview.unshift(request.body.review);
      }
    })
        //res.send("please leave a comment ");
    },
 // review and rate page

  //Taking info from user to update
    updateProfile:function(req,res){
        // creating an new user object if any of the attributes arent in the body
             // it wont update in the updateController

            let incomingReq = new Customer({
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
    //This function takes in the desired user's email, an views all relevant information.
};


module.exports = customerController;
