var express = require('express');

var BusinessController = require('../Controllers/BusinessController.js');

var router = express.Router();

router.get('/', function(req, res){
  res.send('this page');
});

// route to business profile page
router.get('/profile', BusinessController.getBusiness);

module.exports = router;
