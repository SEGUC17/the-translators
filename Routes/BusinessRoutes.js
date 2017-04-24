//identifying dependencies
var express = require('express');
var router = express.Router();

var BookingController = require('../Controllers/BookingController');

var BusinessController = require('../Controllers/BusinessController');
var Business= require('../Models/BusinessModel');



router.post('/updatedgymschedule', BusinessController.uploadGymSchedule);


router.get("/viewproducts", BusinessController.viewProducts);
router.put("/updateproducts", BusinessController.updateProduct);
router.delete("/removeproduct", BusinessController.removeProduct);


router.get('/UploadProducts', function(req, res){
  res.render('pages/BusinessView');
});

router.post('/ProductModel', BusinessController.createproduct);

//Business Owner views Customers' booking requests
router.get('/BusinessBookings', BookingController.ViewBusinessBookingList); //double check if i can use the functionality in router.get or not!
//Business Owner changed the booking status of a specific booking requests
router.post('/ChangeBookingStatus', BookingController.ChangeCustomerBookingRequestStatus); //double check the path used if it is convenient since the business owner shouldn't be redirected to a new page when editing the booking status

module.exports = router;
