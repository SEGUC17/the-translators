var express = require('express');
var router = express.Router();

var CustomerController = require('../Controllers/CustomerController');
var BookingController = require('../Controllers/BookingController');

var Customer = require('../Models/CustomerModel');

router.get('/checkout', CustomerController.CheckoutSum);
router.get('/viewcart', CustomerController.viewCart);
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
router.post('/removeFromCart', CustomerController.removeFromCart);


router.get('/CustomerProfile/edit',function (req,res){
  res.render('pages/updatprofilecustomers');
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

//Customer views their booking requests
router.get("/MyBookings", BookingController.ViewMyBookings);

//Customer Submits Booking Request
router.post("/bookingrequest", BookingController.createBooking);

router.post('/CustomerProfile/edit',CustomerController.updateProfile);


module.exports = router;
