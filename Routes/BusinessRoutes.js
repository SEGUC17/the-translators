var express = require('express');

var router = express.Router();
var BusinessController = require('../Controllers/BusinessController');

router.get('/', function(req, res){
  res.console('this page');
});

router.get('/editproducts', function(req, res){
  res.send('this is edit products');
});
router.post('/editproducts', BusinessController.editproducts);


module.exports = router;
