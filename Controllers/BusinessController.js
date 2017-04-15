var mongoose = require('mongoose');

let uploadproducts = require ('../Models/ProductModel');
let Product = require ('../Models/ProductModel.js');
let Business = require ('../Models/BusinessModel.js');

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

  //getting the username of business owner for login
  getBusinessByUsername: function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    Business.findOne({BusinessUsername: username, Password : password}, function (err, user) {
      if (err) { 
        console.log(err); 
        return done(err); 
      }
      if (!user) { 
        console.log(user);
        return res.send('user not registered or invalid password');
      }
      return res.send('Successfully logged in');
    });
  },

   gymsubscription: function(req, res){
    var gymSubscribe = new Business(req.body);
    gymSubscribe.save(function(err, gymsubscription){
    if(err){
      res.send(err.message);
    }
    else{
      res.send('Subscription successful');                
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

  //getting the id of business owner for login
  getBusinessById: function(id, callback){
    Business.findById(id, callback);
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
},

viewproducts: function(req,res){

      uploadproducts.find({username:req.params.id},
      function(err, result){
        if(err)
          { console.log('error in view products');
              res.json(err.message);
          }
          else if(result){
            res.render("viewproducts",{result});
          }

      });
        //res.send("done");
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
            }
            // res.redirect('editproduct');

    }


});
  res.send("done");
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
      //res.send("done");
  },

 //Taking info from user to update
    updateProfile:function(req,res){
        // creating an new user object if any of the attributes arent in the body
             // it wont update in the updateController

            let incomingReq = new Business({
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
             else
             {
               response.render('BusinessProfile/view'); // selected page
          }
          })

    }
}

module.exports = BusinessController;
