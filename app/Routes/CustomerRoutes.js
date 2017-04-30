var express = require("express");
var router = express.Router();
var passport = require('passport');

var CustomerController = require("../Controllers/CustomerController");
var BookingController = require("../Controllers/BookingController");

var Customer = require("../Models/CustomerModel");
var Booking = require("../Models/BookingModel.js");

passport.authenticate('jwt' ,{session:false});

router.get("/checkout", CustomerController.CheckoutSum);
router.get("/viewcart", CustomerController.viewCart);

router.get("/CustomerView", CustomerController.ReviewandRatePage);


router.get("/shoppingpage", CustomerController.shoppingPage);
router.get("/addToCart", CustomerController.addToCart);
router.post("/removeFromCart", CustomerController.removeFromCart);
router.post("/customerView", function(request, res) {

  var review = request.body.ReviewComment;
  Gym.update({ "$push": { "GymReview": review } },function (err,result){
  if(err)
  {
    throw err;
  }
  else {
    console.log("review added successfully");
    res.render("pages/CustomerView");

  }
});
});


//Customer Submits Booking Request
router.post("/bookingrequest", function(req,res){
        Booking.create({
            CustomerUsername: req.body.CustomerUsername,
            GymNameLocation: req.body.GymNameLocation,
            selectedClass: req.body.selectedClass,
            selectedTime: req.body.selectedTime,
            selectedDate: req.body.selectedDate
                    
},function(err,Bookings){
  if(err){         
            return res.status(500).json ({
                    error:'Internal server error',
                    data:null
  
        })
  }
        else if (Bookings){
                console.log(Bookings);
                return res.json ({
                    error:null,
                    data:Bookings
     })
        }
        // }else { 
        //             return res.status(404).json ({
        //             error:'Booking already exists',
        //             data:null
  
        // })
        // }

})
});

//Customer views their booking requests

router.post("/MyBookings", (function(req, res) {
    Booking.find({}, function(err, Bookings) {
        if (Bookings) {
            return res.json({
                error: null,
                data: Bookings
            });
        } else if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            })
        }
    });                        
    
}));
module.exports = router;
