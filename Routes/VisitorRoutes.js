var express = require('express');

var router = express.Router();

router.get('/visitor', function(req, res){
  res.console('this is the visitor pagepage');
});

module.exports = router;
