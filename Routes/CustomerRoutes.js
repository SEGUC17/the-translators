var express = require('express');

var router = express.Router();
 var CustomerController = require('../Controllers/CustomerController');
 var BookingController = require('../Controllers/BookingController');


 router.get("/MyBookings", BookingController.ViewMyBookings);
 router.post("/BookingRequest", BookingController.createBooking);
module.exports = router;
