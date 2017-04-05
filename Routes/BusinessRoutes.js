var express = require('express');

var router = express.Router();

router.get('/business', function(req, res){
  res.send('this business page');
});

module.exports = router;
