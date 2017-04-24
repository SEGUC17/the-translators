var bcrypt = require('bcryptjs');
var config = require('../config/database');

var uploadproducts = require ('../Models/ProductModel');
var Business = require ('../Models/BusinessModel');

var updateController = require('./updateController');

//function to upload products
var BusinessController =
{
  //Method that adds newly subscribed Business Owner to the database 
  addBusiness: function(newBusiness, callback){
       bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newBusiness.Password, salt, function(err, hash){
                if(err) throw err;
                newBusiness.Password =hash;
                newBusiness.save(callback);
            })
        });
    },


  //Method that gets LoggedIn Business Owner by ID
  getBusinessById: function(id, callback){
        Business.findById(id,callback);
    },
    
    //Method that gets LoggedIn Business Owner by Username
     getBusinessByUsername: function(username, callback){
        var query = {BusinessUsername: username}
        Business.findOne(query,callback);
    },

    

    comparePassword1: function(candidatePassword, hash, callback){
        bcrypt.compare(candidatePassword, hash, function(err, isMatch){
            if(err) throw err;
            callback(null, isMatch);
        });
    },

 createproduct:function(req,res){
    var prod = new Product(req.body);
    prod.save(function(err, prod){
      if(err){
        res.json(err.message)
        console.log(err);
      }  else{
        console.log(prod);
        res.json('Products are uploaded');
      }
    })
  },

        viewProducts: function(req, res) {
        uploadproducts.find({user:req.user.username}, function(err, data) {
              if (err) {
              res.json("error");
              return;
              }
              res.json({data});
              });
          },
        updateProduct: function(req, res) {
        var id = req.params.id;
        uploadproducts.findOne({prodID:req.body.prodID}, function(err, productData) {
              if (err) {
              res.json("error");
              return;
              }
              res.json(ProductData[0]);
        });

        //put("/:id", function(req, res) {
        //  var id = req.params.id;
        //  var document = req.body;
        
        uploadproducts.findByIdAndUpdate(id, { prodname: document.prodname, price: document.price,
            ProductDescription: document.ProductDescription, Quantity: document.Quantity, image: document.image }, 
                    function(err) {
                    if (err) {
                    res.json("error");
                    return;
                    }
                    res.json("updated");
                    });
        },
        
        removeProduct: function(req,res){
        var id = req.params.id;
        uploadproducts.findByIdAndRemove(id, function(err) {
            if (err) {
            res.json("error");
            return;
            }
            res.json("deleted");
            });
        },
        
          //this method is for business owners to upload schedule on their profile.
          uploadGymSchedule: function(req, res){
            Business.findOne({username: req.user.username},
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

 //Taking info from user to update
    updateProfile:function(req,res){
        // creating an new user object if any of the attributes arent in the body
             // it wont update in the updateController

            var incomingReq = new Business({
                Email:req.decoded._doc.email,
                GymName_location:req.body.GymName_location,
                Address:req.body.Address,
              //  BusinessUsername:req.body.BusinessUsername,
                Password:req.body.Password,
                Description:req.body.Description,
                PhoneNumber:req.body.PhoneNumber,
                BankName:req.body.BankName,
                AccountNumber:req.body.AccountNumber,
                Description:req.body.Description

            });
            //For schedule only
            var targetPath = "";
            if(!req.file)
            {
                targetPath = "views/uploads/default.jpg";
            }else{
                targetPath = 'views/uploads/' + req.file.originalname;
                var file = fileStream.createReadStream(req.file.path);
                var final = fileStream.createWriteStream(targetPath);
                file.pipe(final);
                fileStream.unlink(req.file.path);
            }
            if(targetPath != "views/uploads/default.jpg")
            {
                incomingReq.Schedules = targetPath;
            }
            //Updating the business
            updateController.updateProfile(incomingReq,res);

            //redirecting to business view
            Business.find({BusinessUsername :incomingReq.BusinessUsername}).toArray(function(err,result){
             if(err){
               throw err;
             }
             
          })

    }
}

module.exports = BusinessController;
