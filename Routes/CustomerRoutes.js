var express = require('express');

var router = express.Router();

router.get('/customer', function(req, res){
  res.send('this customer page');
});

module.exports = router;
