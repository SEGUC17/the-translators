//identifying dependencies
var express = require("express");
var router = express.Router();
var passport = require('passport');

var BookingController = require('../Controllers/BookingController');

var BusinessController = require('../Controllers/BusinessController');
var Business= require('../Models/BusinessModel');
var Product = require('../Models/ProductModel');

passport.authenticate('jwt' ,{session:false});

router.post("/updatedgymschedule", BusinessController.uploadGymSchedule);

router.post("/uploadproducts", BusinessController.createproduct);

router.post("/viewproducts",  (function(req, res) {
    Product.find({}, function(err, Products) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        } else if (Products) {
            return res.json({
                error: null,
                data: Products
            });
        }
    });
}));
router.post("/product",  (function(req, res) {
    var id = req.body.prodID;
    Product.findById({}, function(err, Products) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        } else if (Products) {
            return res.json({
                error: null,
                data: Products
            });
        }
    });
}));
router.put("/updateproducts", BusinessController.updateProduct);

router.delete("/removeproduct",  function(req,res){
        Product.findByIdAndRemove({
            _id : req.params
        }, function(err, product) {
            if (err)
                res.send(err);
        });
         Product.find(function(err, products) {
                if (err)
                    res.send(err)
                res.json(products);
            });
});


//Business Owner views Customers' booking requests
router.get('/BusinessBookings', BookingController.ViewBusinessBookingList);
//Business Owner changed the booking status of a specific booking requests
router.post('/ChangeBookingStatus', BookingController.ChangeCustomerBookingRequestStatus);


module.exports = router;
