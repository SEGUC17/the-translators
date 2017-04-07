<<<<<<< HEAD
//MulterDepndencies

// var multer = require('multer');
// var workData = multer({dest:'views/uploads'});
// var type = workData.single('upload');
// var fileStream = require('fs');

let Customer = require('/home/basel/Desktop/baselAkherHAGA/the-translators/Models/CustomerModel.js');


var updateController2 = require("./updateController2");


let CustomerController = {

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
            //For schedule only
            // var targetPath = "";
            // if(!req.file)
            // {
            //     targetPath = "views/uploads/default.jpg";
            // }else{
            //     targetPath = 'views/uploads/' + req.file.originalname;
            //     var file = fileStream.createReadStream(req.file.path);
            //     var final = fileStream.createWriteStream(targetPath);
            //     file.pipe(final);
            //     fileStream.unlink(req.file.path);
            // }
            // if(targetPath != "views/uploads/default.jpg")
            // {
            //     incomingReq.Schedules = targetPath;
            // }
            //Updating the business
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

}

//Export for the rest of the project.
module.exports = CustomerController;
=======
<<<<<<< HEAD
var bcrypt = require('bcryptjs');
let product = require('../Models/ProductModel');
let Customer = require('../Models/CustomerModel');
let Gym = require ('../Models/BusinessModel');

let customerController = {

  /*viewing the shopping cart*/
    viewCart: function(req, res){
      Customer.find({shoppingcart: req.params.shoppingcart}, function(err, shoppingcart){
        if (err){
          res.send(err.message);}
        else{
          res.json(shoppingcart);}
      });
    },
    /*adding an item to the shopping cart*/
    addToCart:function(req, res){
        Customer.find({shoppingcart:req.params.shoppingcart}).unshift(product);
        qty++;
        res.json(qty);
    },
    /*removing an item from the shopping cart*/
    removeFromCart:function(req, res){
        Customer.find({shoppingcart:req.params.shoppingcart}).splice(product);
        qty--;
        res.json(qty);
    },
    // this function should calculate the sum of all the items in the shopping cart
    CheckoutSum: function(req, res){
    var sum = 0.0;
    var qty = 0;
    for(var i = 0; i< shoppingCart.length; i++){
    sum += shoppingCart[i].find({}, doc.getElementById("orderedProduct.price"));
    qty++;
    }
    res.render("sum");
  },
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
	},

	getCustomer:function(req, res){

      // retrieve username of the customer from session
      var username = req.user.username;

      // fetch the logged in customer from the database using the username retrieved
      Customer.findOne({username : username }, function(err,result)
      {
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
	} // review and rate page

};


module.exports = customerController;
>>>>>>> c903b6f994a5218ac85dc36150d286216f2a9452
>>>>>>> ab2bb518bd208994b53945055edb2c046e73565a
