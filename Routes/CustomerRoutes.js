var express = require('express');
var CustomerController = require('../Controllers/CustomerController.js');

var router = express.Router();

router.get('/', function(req, res){
  res.send('this page');
});

// route to customer profile page
router.get('/profile', CustomerController.getCustomer);

module.exports = router;
