let product = require('../Models/ProductModel');
let Customer = require('../Models/CustomerModel');
let Gym = require ('../Models/BusinessModel');

let updateController2 = require('../Controllers/updateController2');

var qty = 0;

let customerController = {
/*viewing the shopping cart*/
  viewCart: function(req, res){
  /*to find the logged in customer*/
    Customer.findOne({username: req.body.username}, function(err, cust){
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
  Customer.findOne({username: req.body.username}, function(err, cust){
    if (err){res.send(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.send("empty, try logging in correctly!!");}
    /*to push the selected product in the shopping cart array by finding this product*/
    else if (cust) {cust.shoppingcart.unshift(product.findOne({prodID: req.body.prodID}, function(err, prod){
        if(err){res.send(err.message);}
        /*if no such product found*/
        else if(prod ==null){res.send("no such product!!");}
        /*to show me that product*/
        else if(prod){res.send(prod);}
      }))};
      /*to increment the quantity of items in the shopping cart*/
      qty++;
      res.send(cust.shoppingcart);
  })},
  /*removing an item from the shopping cart*/
  removeFromCart:function(req, res){
    /*to find the logged in customer*/
  Customer.findOne({username: req.body.username}, function(err, cust){
    if (err){res.send(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.send("empty, try logging in correctly!!");}
    /*to show me the shopping cart*/
    else if (cust) {res.send(cust.shoppingcart);}
    /*to remove the selected product in the shopping cart array by finding this product*/
  }).splice(product.findOne({prodID: req.body.prodID}, function(err, prod){
        if(err){res.send(err.message);}
        /*if no such product found*/
        else if(prod ==null){res.send("no such product!!");}
        /*to show me that product*/
        else if(prod){res.send(prod);}
      }));
    /*to decrement the quantity of items in the shopping cart*/
    qty--;
    res.send(cust.shoppingcart);
  },
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

	//getting the id of customers for login
	getCustomerById: function(id, callback){
		Customer.findById(id, callback);
	},
  
	getCustomer:function(req, res){

  // retrieve username of the customer from session
  var username = req.user.username;

  // fetch the logged in customer from the database using the username retrieved
  Customer.findOne({username : username }, function(err,result){
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
},

	CustomerViewGymPage: function(request, response){
		response.send("hello visitor");
		var GymName = request.body.GymName_location;
	  	var username = request.body.BusinessUsername ;
		Gym.find({userame : BusinessUsername}).toArray(function(err,result){
			if(err){
				throw err;
			}
			else if(result.length){
			response.render('CustomerView'); // selected page
			}else {
				console.log("no document found");
				response.render('GeneralView'); // homepage
			}
		})
		}, // selected gym page

	RetrieveUsername: function(request ,response){
		//response.send('hello mariam');
		Gym.findOne({BusinessUsername: request.params.BusinessUsername}, function(err, user){
	    response.json(Gym)});
	},
	 //to retrieve name from database

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

	ReviewandRatePage: function(request, res) {
		console.log(request.body.BusinessUsername);
		var username = request.body.BusinessUsername;
		var GymName = request.body.GymName_location;
		var GymProduct = request.body.ProdList;
	 	var GymReview = request.body.GymReview;
	  var GymRating = request.body.GymRating;
		var document = { gymReview : GymReview, gymRating: GymRating};
		Gym.insert({review :GymReview , rate : GymRating });
		res.render('CustomerView');
	}, // review and rate page

  //Taking info from user to update
    updateProfile:function(req,res){
        // creating an new user object if any of the attributes arent in the body
             // it wont update in the updateController

            let incomingReq = new Customer({
                email:req.decoded._doc.email,
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                age:req.body.age,
                password:req.body.password,
                mobilenumber:req.body.mobilenumber,
                gender:req.body.gender,
            });
            
            updateController2.updateProfile(incomingReq,res);

            //redirecting to customer view
            customer.find({username :incomingReq.username}).toArray(function(err,result){ //hena 3ashan a3mel redirect hadawar 3ala username
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