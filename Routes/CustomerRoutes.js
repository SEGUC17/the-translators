var express = require('express');

var router = express.Router();

var CustomerController = require('../Controllers/CustomerController');

// var multer = require('multer');
// var workData = multer({dest:'views/uploads'});
// var type = workData.single('upload');
// var fileStream = require('fs');
router.post('/CustomerProfile/edit',CustomerController.updateProfile); //update profile and followed by a redirect
module.exports =router;

//update profile and followed by a redirect





//router.get('/', function(req, res){
//  res.console('this page');
//});
//this was before line 17
