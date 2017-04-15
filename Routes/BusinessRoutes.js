//identifying dependencies
var express = require('express');
var router = express.Router();

//initialize passport and passport-local
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var BusinessController = require('../Controllers/BusinessController');

var Business= require('../Models/BusinessModel');

//initialize user

router.get('/businesslogin', function(req, res){
  res.render('pages/BusinessLoginView');
});

router.post('/BusinessModel', BusinessController.getBusinessByUsername);

passport.serializeUser(function(business, done) {
  done(null, business.id);
});

passport.deserializeUser(function(id, done) {
  BusinessController.getBusinessById(id, function(err, business) {
    done(err, business);
  });
});

// route to business profile page
router.get('/businessprofile', function(req, res){
  res.render('pages/updateprofilebusiness'); });

router.get('/subscripe', function(req,res){
       res.render('pages/subscripe');
});
router.post('/subscripe', BusinessController.gymsubscription);

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
  res.send('this is updatedgymschedule page page');
});

router.get('/UploadProducts', function(req, res){
  res.render('pages/BusinessView');
});

router.post('/profile', BusinessController.getBusiness);
router.post('/ProductModel', BusinessController.createproduct);

module.exports = router;