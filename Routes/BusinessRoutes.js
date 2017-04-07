//identifying dependencies
var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var BusinessController = require('../Controllers/BusinessController');

// router.get('/', function(req, res){
//   res.console('this page');
// });

// router.post('/editproducts', function(req, res){
//   res.send('this is edit products');
// });
router.get('/editproducts', BusinessController.editproducts);

=======
var BusinessController = require('../Controllers/BusinessController.js');

router.get('/business', function(req, res){
  res.send('this business page');
//initialize user
var Business = require('../Models/BusinessModel');

router.get('/businesslogin', function(req, res){
  res.send('this is business login page');
});
>>>>>>> c903b6f994a5218ac85dc36150d286216f2a9452

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

<<<<<<< HEAD
var BusinessController = require('../Controllers/BusinessController');

// var multer = require('multer');
// var workData = multer({dest:'views/uploads'});
// var type = workData.single('upload');
// var fileStream = require('fs');




//update profile and followed by a redirect
router.post('/BusinessProfile/edit',BusinessController.updateProfile);
=======
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
>>>>>>> ab2bb518bd208994b53945055edb2c046e73565a

router.get('/uploadproducts', BusinessController.createproduct);
router.post('/products', BusinessController.createproduct);


module.exports = router;
