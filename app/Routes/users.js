//initializing dependencies
var express =require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../../config/database');

//importing models
var BusinessModel = require('../Models/BusinessModel');
var Customer = require('../Models/CustomerModel');
var Business = require('../Models/BusinessModel');
var ProductModel = require('../Models/ProductModel');

//importing controllers
var BusinessController = require('../Controllers/BusinessController');
var CustomerController = require('../Controllers/CustomerController');

passport.authenticate('jwt' ,{session:false});

//Register Router
router.post('/register', function(req,res){
    Customer.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber,
        gender: req.body.gender
    },function(err,customers){
  if(err){         
            return res.status(500).json ({
                    error:'Internal server error',
                        data:null
  
        })
  }
        else if (customers){
                console.log(customers);
                return res.json ({
                    error:null,
                    data:customers
     })
        }
       
})
});
  

//Subscribe Router
router.post('/subscribe', function(req,res){
    Business.create({
     GymName_location: req.body.GymName_location,
     Address: req.body.Address,
     Email: req.body.Email,
     BusinessUsername: req.body.BusinessUsername,
     Password: req.body.Password,
     PhoneNumber: req.body.PhoneNumber,
     BankName: req.body.BankName,
     AccountNumber: req.body.AccountNumber,
     Description: req.body.Description
    },function(err,businesses){
  if(err){         
            return res.status(500).json ({
                    error:'Internal server error',
                        data:null
  
        })
  }
        else if (businesses){
                console.log(businesses);
                return res.json ({
                    error:null,
                    data:businesses
     })
        }
       
})
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

router.post('/customerlogin', function(req, res) {
    Customer.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, Customer) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        }
        if (Customer) {
            return res.json({
                error: null,
                data: Customer
            });
        } else {
            return res.status(404).json({
                error: 'User not found',
                data: null
            });
        }
    });
});

router.post('/businesslogin', function(req, res) {
    Business.findOne({
        BusinessUsername: req.body.username,
        Password: req.body.password
    }, function(err, business) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        }
        if (business) {
            return res.json({
                error: null,
                data: business
            });
        } else {
            return res.status(404).json({
                error: 'User not found',
                data: null
            });
        }
    });
});

//Business Authenticate Router
// 

module.exports = router;


