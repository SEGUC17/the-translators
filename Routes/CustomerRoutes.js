var express = require('express');

var router = express.Router();
var CustomerController = require('../Controllers/CustomerController.js');

router.get('/', function(req, res){
  res.console('this page');
});

router.get('/CustomerView',CustomerController.CustomerViewGymPage);

router.get('/CustomerView',CustomerController.ReviewandRatePage);


router.get('/CustomerView',CustomerController.RetrieveUsername);

module.exports = router;
