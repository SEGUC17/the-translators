var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.console('this page');
});

module.exports = router;
