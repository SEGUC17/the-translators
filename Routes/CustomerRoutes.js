var express = require('express');
var router = express.Router();
var CustomerController = require('../Controllers/CustomerController');

router.get('/checkout', function(req, res){
  res.render('this page');
});
//router.get('/viewcart', CustomerController.viewCart);

module.exports = router;
