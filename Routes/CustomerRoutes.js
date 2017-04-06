var express = require('express');
var router = express.Router();
var CustomerController = require('../Controllers/CustomerController');

router.get('/checkout', function(req, res){
  res.render('this page');

router.post('/CustomerProfile/edit',CustomerController.updateProfile); //update profile and followed by a redirect
module.exports =router;

router.get('/', function(req, res){
  res.send('this home page');

});
router.get('/viewcart', CustomerController.viewCart);

 var CustomerController = require('../Controllers/CustomerController');
 var BookingController = require('../Controllers/BookingController');

//initialize user
var Customer = require('../Models/CustomerModel');

router.get('/viewcart', CustomerController.viewCart);

router.get('/customerlogin', function(req, res){
  res.send('this is customer login page');
});

// route to customer profile page
router.get('/profile', CustomerController.getCustomer);

//initialize passport and passport-local
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

// compares the username with available usernames and validates password
passport.use(new localStrategy(
  function(username, password, done) {
    Customer.getCustomerByUsername(username, function(err, customer){
      if(err) throw err;
      console.log(customer)
      //if there is not a user
      if(!customer){
        return done(null,false, {message: 'You are not registered'});
      }

      //if there is a match
      Customer.comparePassword(password, customer.password, function(err, isMatch){
      if(err) throw err;

      //check for the match
      if(isMatch){
        return done(null, customer);
      } else {
        return done(null,false, {message: 'Invalid Password'});
      }
      });
    });
  }));

passport.serializeUser(function(customer, done) {
  done(null, customer.id);
});


passport.deserializeUser(function(id, done) {
  Customer.getCustomerById(id, function(err, customer) {
    done(err, customer);
  });
});
//router.get('/viewcart', CustomerController.viewCart);

//local cause we are using a local database. this helps to authorize users for login
router.post('/customerlogin', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/customerlogin', failureFlash: true}), function(req, res) {
  });

//route to logout
router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You have logout');

  res.redirect('/customerlogin');
});

 router.post("/BookingRequest", BookingController.createBooking);




module.exports = router;
