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
router.get("/CustomerView", CustomerController.CustomerViewGymPage);
router.get("/CustomerView", CustomerController.ReviewandRatePage);
router.get('/viewcart', CustomerController.viewCart);

router.get('/viewcart', function(req, res){
  res.render('pages/shoppingcart');
});

router.get('/addToCart', function(req, res){
  res.render('pages/shoppingcart');
});
router.get('/removeFromCart', function(req, res){
  res.render('pages/shoppingcart');
});


router.get('/shoppingpage', CustomerController.shoppingPage);
router.get('/addToCart', CustomerController.addToCart);
router.get('/removeFromCart', CustomerController.removeFromCart);

router.get("/BookingRequest", function(req, res){
  res.render('pages/BookingPage'); 
});

// route to business profile page
router.get('/customerprofile', function(req, res){
  res.render('pages/updateprofilecustomer'); });

router.get('/customerView',function (req,res){
  res.render('pages/CustomerView');
});


router.post('/customerView', function(request, res) {

  var review = request.body.ReviewComment;
  Gym.update({ "$push": { 'GymReview': review } },function (err,result){
  if(err)
  {
    throw err;
  }
  else {
    console.log("review added successfully");
    res.render('pages/CustomerView');

  }
});
});

//Customer Submits Booking Request
router.post("/BookingRequest", BookingController.createBooking);
router.post('/CustomerProfile/edit',CustomerController.updateProfile);
router.post('/customerprofile', CustomerController.getCustomer);
router.post("/BookingRequest", BookingController.createBooking);

// compares the username with available usernames and validates password
// passport.use(new localStrategy(
//   function(username, password, done) {
//     Customer.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));

//route to customer login page
router.get('/customerlogin', function(req, res){
  res.render('pages/CustomerLoginView');
});

router.post('/CustomerModel', function(req, res) {
  Customer.findOne({ "username": req.body.username, "password": req.body.password }, function (err, user) {
      if (err) { 
        console.log(err);
        return res.json('err'); 
      }
      if (!user) { 
        console.log('not registered or invalid password');
        console.log(req.body.username);
        return res.json('not registered or invalid password'); 
      }
      return res.json('logged in');
    });
  });

passport.serializeUser(function(customer, done) {
  done(null, customer.id);
});

passport.deserializeUser(function(id, done) {
  CustomerController.getCustomerById(id, function(err, customer) {
    done(err, customer);
  });
});

module.exports = router;