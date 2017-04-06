//identifying dependencies
var express = require('express');
var router = express.Router();
var BusinessController = require('../Controllers/BusinessController');

router.get('/editproducts', BusinessController.editproducts);

router.get('/business', function(req, res){
  res.send('this business page');
//initialize user
var Business = require('../Models/BusinessModel');

router.get('/businesslogin', function(req, res){
  res.send('this is business login page');
});

// route to business profile page
router.get('/profile', BusinessController.getBusiness);

router.post('/businessownersubscription', BusinessController.gymsubscription);
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

router.get('/uploadproducts', BusinessController.createproduct);
router.post('/products', BusinessController.createproduct);


module.exports = router;
