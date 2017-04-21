var express = require('express');
let Gym = require ('../Models/BusinessModel');
var router = express.Router();
var CustomerController = require('../Controllers/CustomerController');

router.get('/', function(req, res){
  res.send('this page');
});

router.get ('/customerView' , CustomerController.CustomerViewGymPage);

router.post('/customerView',CustomerController.ReviewandRatePage);




module.exports = router;
