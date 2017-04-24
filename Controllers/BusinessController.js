var bcrypt = require('bcryptjs');
var config = require('../config/database');

let uploadproducts = require ('../Models/ProductModel');
let Product = require ('../Models/ProductModel.js');
let Business = require ('../Models/BusinessModel');

let updateController = require('../Controllers/updateController');

//function to upload products
let BusinessController =
{

  createproduct:function(req,res){
    let prod = new Product(req.body);
    prod.save(function(err, prod){
      if(err){
        res.send(err.message)
        console.log(err);
      }  else{
        console.log(prod);
        res.send('Products are uploaded');
      }
    })
  },

<<<<<<< HEAD
  
=======

>>>>>>> mariamyehia

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

  //retreiving business account using ID
<<<<<<< HEAD
=======

>>>>>>> mariamyehia
  getBusinessById: function(id, callback){
        Business.findById(id,callback);
    },

        //checking if business exists by username
<<<<<<< HEAD
=======

>>>>>>> mariamyehia
     getBusinessByUsername: function(username, callback){
        var query = {BusinessUsername: username}
        Business.findOne(query,callback);
    },

<<<<<<< HEAD
    //to add a new business in the database
=======

    //to add a new business in the database

>>>>>>> mariamyehia
    addBusiness: function(newBusiness, callback){
       bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newBusiness.Password, salt, function(err, hash){
                if(err) throw err;
                newBusiness.Password =hash;
                newBusiness.save(callback);
            })
        });
    },

<<<<<<< HEAD
    //to verify password
=======

    //to verify password

>>>>>>> mariamyehia
    comparePassword1: function(candidatePassword, hash, callback){
        bcrypt.compare(candidatePassword, hash, function(err, isMatch){
            if(err) throw err;
            callback(null, isMatch);
        });
    },
<<<<<<< HEAD
    
=======

>>>>>>> mariamyehia
viewproducts: function(req,res){

      uploadproducts.find({username:req.params.id},
      function(err, result){
        if(err)
          { console.log('error in view products');
              res.json(err.message);
          }
          else if(result){
<<<<<<< HEAD
            res.render("viewproducts",{result});
          }

      });
        //res.send("done");
=======
            res.render({result});
          }

      })
>>>>>>> mariamyehia
  },
// this function should allow the business owner to edit his already existing products
  editproducts: function (req,res){

      uploadproducts.find({'prodID': req.body.prodID},
      function(error, document){
        if(error)
          { console.log('error in edit products');
              document.json(error.message);
          }
          else if(document){
            if(req.body.prodname == ""){
              uploadproducts.update({prodname:req.body.prodname});
            }
            if(req.body.price ==null){
              uploadproducts.update({price:req.body.price});
            }
            if(req.body.image==null){
              uploadproducts.update({image:req.body.image});
            }
            if(req.body.ProductDescription==""){
              uploadproducts.update({ProductDescription:req.body.ProductDescription});
<<<<<<< HEAD
            }
            // res.redirect('editproduct');
=======
          };
>>>>>>> mariamyehia

    }


<<<<<<< HEAD
});
  res.send("done");
=======
})
>>>>>>> mariamyehia
},
    removeproducts:function(req,res){
      uploadproducts.findOne({'prodID': req.body.prodID},
      function(error, document){
        if(error)
          { console.log('error in remove product');
              res.json(error.message);
          }
          else if(document){
              uploadproducts.deleteOne(document);
              console.log(document);
            }
    });
<<<<<<< HEAD
      //res.send("done");
=======

>>>>>>> mariamyehia
  },

 //Taking info from user to update
    updateProfile:function(req,res){
        // creating an new user object if any of the attributes arent in the body
             // it wont update in the updateController

            let incomingReq = new Business({
                Email:req.decoded._doc.email,
                GymName_location:req.body.GymName_location,
<<<<<<< HEAD
                Address:req.body.Address,
              //  BusinessUsername:req.body.BusinessUsername,
=======
                //Address:req.body.Address,
>>>>>>> mariamyehia
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
             else
             {
<<<<<<< HEAD
               response.render('BusinessProfile/view'); // selected page
=======
               response.render(result); // selected page
>>>>>>> mariamyehia
          }
          })

    }
}

module.exports = BusinessController;
