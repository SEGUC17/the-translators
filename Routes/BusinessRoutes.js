//identifying dependencies
var express = require('express');
var router = express.Router();

//initialize passport and passport-local
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var BusinessController = require('../Controllers/BusinessController');

var Business= require('../Models/BusinessModel');

//initialize user

router.post('/businesslogin', BusinessController.getBusinessByUsername, function(req, res){
  res.render('pages/BusinessLoginView');
});

// route to business profile page
router.get('/profile', function(req, res){
  res.send('this get profile page'); });

router.get('/businessownersubscription', function(req, res){
  res.send('this is subscription page page');
});

router.get('/updatedgymschedule', function(req, res){
  res.send('this is updatedgymschedule page page');
});

//route to logout
router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You have logout');

  res.redirect('/businesslogin');
});

router.get('/UploadProducts', function(req, res){
  res.render('pages/BusinessView');
});

router.post('/profile', BusinessController.getBusiness);
router.post('/ProductModel', BusinessController.createproduct);
router.post('/updatedgymschedule', BusinessController.uploadGymSchedule);
router.post('/businessownersubscription', BusinessController.gymsubscription);

// compares the username with available usernames and validates password
passport.use(new localStrategy(
  function(username, password, done) {
    BusinessController.getBusinessByUsername(username, function(err, business){
      if(err) throw err;
      console.log(business)
      //if there is not a user
      if(!business){
        return done(null,false, {message: 'You are not registered'});
      }

      //if there is a match
      BusinessController.comparePassword(password, business.password, function(err, isMatch){
      if(err) throw err;
      //check for the match
      if(isMatch){
        return done(null, business);
      } else {
        return done(null,false, {message: 'Invalid Password'});
      }
      });
    });
  }));

passport.serializeUser(function(business, done) {
  done(null, business.id);
});

passport.deserializeUser(function(id, done) {
  BusinessController.getBusinessById(id, function(err, business) {
    done(err, business);
  });
});

//local cause we are using a local database. this helps to authorize users for login
router.post('/businesslogin', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/businesslogin', failureFlash: true}), function(req, res) {  
  });

module.exports = router;