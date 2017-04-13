var express = require('express');
var router = express.Router();
var BusinessController = require('../Controllers/BusinessController.js');

router.get('/business', function(req, res){
  res.send('this business page');
});

router.get('/UploadProduct', function(req,res){
  res.render('BusinessView');
})

router.post('/ProductModel', BusinessController.createproduct);


module.exports = router;
