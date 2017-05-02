//initializing dependencies
var express =require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');

//importing models
var BusinessModel = require('../Models/BusinessModel');
var CustomerModel = require('../Models/CustomerModel');

//importing controllers
var BusinessController = require('../Controllers/BusinessController');
var CustomerController = require('../Controllers/CustomerController');

//Register Router
router.post('/register', function(req,res){
  console.log("dakhal1");
    let newCustomer = new CustomerModel({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber,
        gender: req.body.gender
    });

    CustomerController.addCustomer(newCustomer, function(err, customer){
        if(err){
            console.log(err);
            console.log("dakhal2");
            res.json({success: false, msg:'Failed to register user'});
        } else {
          console.log("dakhal3");
            res.json({success: true, msg:'User Registered'});
        }
    });
});

//Subscribe Router
router.post('/subscribe', function(req,res){
  console.log("dakhal subcribe");
    let newBusiness = new BusinessModel({
            GymName_location: req.body.GymName_location,
            Address: req.body.Address,
            Email: req.body.Email,
            BusinessUsername: req.body.BusinessUsername,
            Password: req.body.Password,
            PhoneNumber: req.body.PhoneNumber,
            BankName: req.body.BankName,
            AccountNumber: req.body.AccountNumber,
            Description: req.body.Description
    });

    BusinessController.addBusiness(newBusiness, function(err, business){
        if(err){
            res.json({success: false, msg:'Failed to subscribe business'});
        } else {
            res.json({success: true, msg:'Business Registered'});
        }
    });
});

//Customer Profile Router
router.get('/customerprofile',passport.authenticate('jwt', {session:false}), function(req,res, next){
    res.json({user: req.user});
});

//Businesss Profile Router
router.get('/businessprofile',passport.authenticate('jwt', {session:false}), function(req,res, next){
    res.json({user: req.user});
});

//Customer Authenticate Router
router.post('/customerauthenticate', function(req,res){
   var username = req.body.username;
   var password = req.body.password;

   CustomerController.getCustomerByUsername(username, function(err, customer){
       if(err) throw err;
       if(!customer){
           return res.json({success: false, msg:'User not found'});
       }
       CustomerController.comparePassword(password, customer.password, function(err, isMatch){
           if(err) throw err;
           if(isMatch){
               var token = jwt.sign(customer, config.secret,{
                   expiresIn: 604800 // 1week expires and has to login again
               });

               res.json({
                   success: true,
                   token: 'JWT' + token,
                   customer:{
                       id: customer._id,
                       username: customer.username
                    }
                });
           } else {
               return res.json({success: false, msg:'Invalid Password'});
           }
       })
   })
});

//Business Authenticate Router
router.post('/businessauthenticate', function(req,res){
   var username = req.body.BusinessUsername;
   var password = req.body.Password;

   BusinessController.getBusinessByUsername(username, function(err, business){
       if(err) throw err;
       if(!business){
           return res.json({success: false, msg:'Business account not found'});
       }
       BusinessController.comparePassword1(password, business.Password, function(err, isMatch){
           if(err) throw err;
           if(isMatch){
               var token = jwt.sign(business, config.secret,{
                   expiresIn: 604800 // 1week expires and has to login again
               });

               res.json({
                   success: true,
                   token: 'JWT' + token,
                   business:{
                       id: business._id,
                       username: business.BusinessUsername
                    }
                });
           } else {
               return res.json({success: false, msg:'Invalid Password'});
           }
       })
   })
});

module.exports = router;//initializing dependencies
var express =require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');

//importing models
var BusinessModel = require('../Models/BusinessModel');
var CustomerModel = require('../Models/CustomerModel');

//importing controllers
var BusinessController = require('../Controllers/BusinessController');
var CustomerController = require('../Controllers/CustomerController');

//Register Router
router.post('/register', function(req,res){
    let newCustomer = new CustomerModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber,
        gender: req.body.gender
    });

    CustomerController.addCustomer(newCustomer, function(err, customer){
        if(err){
            console.log(err);
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User Registered'});
        }
    });
});

//Subscribe Router
router.post('/subscribe', function(req,res){
    let newBusiness = new BusinessModel({
            GymName_location: req.body.GymName_location,
            Address: req.body.Address,
            Email: req.body.Email,
            BusinessUsername: req.body.BusinessUsername,
            Password: req.body.Password,
            PhoneNumber: req.body.PhoneNumber,
            BankName: req.body.BankName,
            AccountNumber: req.body.AccountNumber,
            Description: req.body.Description
    });

    BusinessController.addBusiness(newBusiness, function(err, business){
        if(err){
            res.json({success: false, msg:'Failed to subscribe business'});
        } else {
            res.json({success: true, msg:'Business Registered'});
        }
    });
});

//Customer Profile Router
router.get('/customerprofile',passport.authenticate('jwt', {session:false}), function(req,res, next){
    res.json({user: req.user});
});

//Businesss Profile Router
router.get('/businessprofile',passport.authenticate('jwt', {session:false}), function(req,res, next){
    res.json({user: req.user});
});

//Customer Authenticate Router
router.post('/customerauthenticate', function(req,res){
   var username = req.body.username;
   var password = req.body.password;

   CustomerController.getCustomerByUsername(username, function(err, customer){
       if(err) throw err;
       if(!customer){
           return res.json({success: false, msg:'User not found'});
       }
       CustomerController.comparePassword(password, customer.password, function(err, isMatch){
           if(err) throw err;
           if(isMatch){
               var token = jwt.sign(customer, config.secret,{
                   expiresIn: 604800 // 1week expires and has to login again
               });

               res.json({
                   success: true,
                   token: 'JWT' + token,
                   customer:{
                       id: customer._id,
                       username: customer.username
                    }
                });
           } else {
               return res.json({success: false, msg:'Invalid Password'});
           }
       })
   })
});

//Business Authenticate Router
router.post('/businessauthenticate', function(req,res){
   var username = req.body.BusinessUsername;
   var password = req.body.Password;

   BusinessController.getBusinessByUsername(username, function(err, business){
       if(err) throw err;
       if(!business){
           return res.json({success: false, msg:'Business account not found'});
       }
       BusinessController.comparePassword1(password, business.Password, function(err, isMatch){
           if(err) throw err;
           if(isMatch){
               var token = jwt.sign(business, config.secret,{
                   expiresIn: 604800 // 1week expires and has to login again
               });

               res.json({
                   success: true,
                   token: 'JWT' + token,
                   business:{
                       id: business._id,
                       username: business.BusinessUsername
                    }
                });
           } else {
               return res.json({success: false, msg:'Invalid Password'});
           }
       })
   })
});

module.exports = router;//initializing dependencies
var express =require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');

//importing models
var BusinessModel = require('../Models/BusinessModel');
var CustomerModel = require('../Models/CustomerModel');

//importing controllers
var BusinessController = require('../Controllers/BusinessController');
var CustomerController = require('../Controllers/CustomerController');

//Register Router
router.post('/register', function(req,res){
    let newCustomer = new CustomerModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber,
        gender: req.body.gender
    });

    CustomerController.addCustomer(newCustomer, function(err, customer){
        if(err){
            console.log(err);
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User Registered'});
        }
    });
});

//Subscribe Router
router.post('/subscribe', function(req,res){
    let newBusiness = new BusinessModel({
            GymName_location: req.body.GymName_location,
            Address: req.body.Address,
            Email: req.body.Email,
            BusinessUsername: req.body.BusinessUsername,
            Password: req.body.Password,
            PhoneNumber: req.body.PhoneNumber,
            BankName: req.body.BankName,
            AccountNumber: req.body.AccountNumber,
            Description: req.body.Description
    });

    BusinessController.addBusiness(newBusiness, function(err, business){
        if(err){
            res.json({success: false, msg:'Failed to subscribe business'});
        } else {
            res.json({success: true, msg:'Business Registered'});
        }
    });
});

//Customer Profile Router
router.get('/customerprofile',passport.authenticate('jwt', {session:false}), function(req,res, next){
    res.json({user: req.user});
});

//Businesss Profile Router
router.get('/businessprofile',passport.authenticate('jwt', {session:false}), function(req,res, next){
    res.json({user: req.user});
});

//Customer Authenticate Router
router.post('/customerauthenticate', function(req,res){
   var username = req.body.username;
   var password = req.body.password;

   CustomerController.getCustomerByUsername(username, function(err, customer){
       if(err) throw err;
       if(!customer){
           return res.json({success: false, msg:'User not found'});
       }
       CustomerController.comparePassword(password, customer.password, function(err, isMatch){
           if(err) throw err;
           if(isMatch){
               var token = jwt.sign(customer, config.secret,{
                   expiresIn: 604800 // 1week expires and has to login again
               });

               res.json({
                   success: true,
                   token: 'JWT' + token,
                   customer:{
                       id: customer._id,
                       username: customer.username
                    }
                });
           } else {
               return res.json({success: false, msg:'Invalid Password'});
           }
       })
   })
});

//Business Authenticate Router
router.post('/businessauthenticate', function(req,res){
   var username = req.body.BusinessUsername;
   var password = req.body.Password;

   BusinessController.getBusinessByUsername(username, function(err, business){
       if(err) throw err;
       if(!business){
           return res.json({success: false, msg:'Business account not found'});
       }
       BusinessController.comparePassword1(password, business.Password, function(err, isMatch){
           if(err) throw err;
           if(isMatch){
               var token = jwt.sign(business, config.secret,{
                   expiresIn: 604800 // 1week expires and has to login again
               });

               res.json({
                   success: true,
                   token: 'JWT' + token,
                   business:{
                       id: business._id,
                       username: business.BusinessUsername
                    }
                });
           } else {
               return res.json({success: false, msg:'Invalid Password'});
           }
       })
   })
});

module.exports = router;
