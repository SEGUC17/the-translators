var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.send('this page');
});

module.exports = router;
