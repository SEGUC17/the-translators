var express = require('express');

var router = express.Router();

var BusinessController = require('../Controllers/BusinessController');

var multer = require('multer');
var workData = multer({dest:'views/uploads'});
var type = workData.single('upload');
var fileStream = require('fs');




//update profile and followed by a redirect
router.post('/BusinessProfile/edit',BusinessController.updateProfile);

module.exports = router;
