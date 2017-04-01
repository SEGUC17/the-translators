var express = require('express');
var router = express.Router();
var CustomerController = require('./Controllers/CustomerController');

router.get('/', function(req, res){
  res.render('this page');
});
router.get('/', CustomerController.viewCart);

module.exports = router;
