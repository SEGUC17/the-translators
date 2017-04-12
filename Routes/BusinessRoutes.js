//identifying dependencies
var express = require('express');
var router = express.Router();
var BusinessController = require('../Controllers/BusinessController');
var Business = require('../Models/BusinessModel');

// router.get('/editproducts', BusinessController.editproducts); //no such method

router.get('/business', function(req, res){
  res.send('this business page'); });
//initialize user

router.get('/businesslogin', function(req, res){
  res.send('this is business login page');
});
// route to business profile page
router.get('/profile', function(req, res){
  res.send('this get business page'); });

router.post('/profile', BusinessController.getBusiness);

router.get('/businessownersubscription', function(req, res){
  res.send('this is subscription page page');
});

router.post('/businessownersubscription', BusinessController.gymsubscription);

router.get('/updatedgymschedule', function(req, res){
  res.send('this is updatedgymschedule page page');
});

router.post('/updatedgymschedule', BusinessController.uploadGymSchedule);

//initialize passport and passport-local
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

// compares the username with available usernames and validates password
passport.use(new localStrategy(
  function(username, password, done) {
    Business.getBusinessByUsername(username, function(err, business){
      if(err) throw err;
      console.log(business)
      //if there is not a user
      if(!business){
        return done(null,false, {message: 'You are not registered'});
      }

      //if there is a match
      Business.comparePassword(password, business.password, function(err, isMatch){
      if(err) throw err;

      //update profile and followed by a redirect
      router.post('/BusinessProfile/edit',BusinessController.updateProfile);
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
  Business.getBusinessById(id, function(err, business) {
    done(err, business);
  });
});

//local cause we are using a local database. this helps to authorize users for login
router.post('/businesslogin', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/businesslogin', failureFlash: true}), function(req, res) {  
  });

//route to logout
router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You have logout');

  res.redirect('/businesslogin');
});

router.get('/uploadproducts', function(req, res){
  res.send('this is uploadproduct page page page');
});
router.post('/uploadproducts', BusinessController.createproduct);

module.exports = router;