var express = require('express');
var router = express.Router();

//initialize passport and passport-local
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var CustomerController = require('../Controllers/CustomerController');
var BookingController = require('../Controllers/BookingController');

var Customer = require('../Models/CustomerModel');

router.get('/checkout', CustomerController.CheckoutSum);
router.get('/viewcart', CustomerController.viewCart);
router.get('/viewcart', CustomerController.viewCart);
router.get("/CustomerView", CustomerController.CustomerViewGymPage);
router.get("/CustomerView", CustomerController.ReviewandRatePage);

router.get("/BookingRequest", function(req, res){
  res.send('this booking page'); 
});

//route to customer login page
router.get('/customerlogin', function(req, res){
  res.render('pages/CustomerLoginView');
});

// route to customer profile page
router.get('/customerprofile', function(req, res){
  res.send('this is get customer page');
});

router.post("/BookingRequest", BookingController.createBooking);
router.post('/CustomerProfile/edit',CustomerController.updateProfile);
router.post('/customerprofile', CustomerController.getCustomer);
router.post("/BookingRequest", BookingController.createBooking);

// compares the username with available usernames and validates password
passport.use(new localStrategy({
  usernameField : 'username',
  passwordField : 'password'
}, 
  function(username, password, done) {
    Customer.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(customer, done) {
  done(null, customer.id);
});

passport.deserializeUser(function(id, done) {
  CustomerController.getCustomerById(id, function(err, customer) {
    done(err, customer);
  });
});

//local cause we are using a local database. this helps to authorize users for login
router.post('/customerlogin', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/customerlogin', failureFlash: true}), function(req, res) {
  });

//route to logout
router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You have logout');

  res.redirect('/customerlogin');
});

module.exports = router;