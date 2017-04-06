var express = require('express');
var router = express.Router();
var BusinessController = require('../Controllers/BusinessController.js');

router.get('/business', function(req, res){
  res.send('this business page');
});

router.get('/uploadproducts', BusinessController.createproduct);
router.post('/products', BusinessController.createproduct);


module.exports = router;
