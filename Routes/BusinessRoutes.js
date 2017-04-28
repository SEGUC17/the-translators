//identifying dependencies
var express = require('express');
var router = express.Router();

var BusinessController = require('../Controllers/BusinessController');

var Business= require('../Models/BusinessModel');
//updating a business profile
router.post('/gymDetailsUpdate',BusinessController.updateProfile);


router.post('/updatedgymschedule', BusinessController.uploadGymSchedule);

router.post('/editproducts', BusinessController.editproducts);
router.get('/editproduct', function(req, res){
  res.render('pages/editproduct');
});


router.post('/removeproducts', BusinessController.removeproducts);
router.get('/removeproducts', function(req, res){
 res.render('pages/removeproducts');
});


router.post('/viewproducts', BusinessController.viewproducts);
router.get('/viewproducts', function(req, res){
 res.render('pages/viewproducts');
});

router.get('/updatedgymschedule', function(req, res){
  res.render('pages');
});

router.get('/uploadproducts', function(req, res){ //de ya yoki
  res.render('pages/BusinessView');
});

router.post('/ProductModel', BusinessController.createproduct);

module.exports = router;
