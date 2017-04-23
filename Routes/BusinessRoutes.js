//identifying dependencies
var express = require('express');
var router = express.Router();

var BusinessController = require('../Controllers/BusinessController');

var Business= require('../Models/BusinessModel');

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

router.post("/uploadproducts", BusinessController.createproduct);


module.exports = router;