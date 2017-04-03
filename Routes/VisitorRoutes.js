var express = require('express');

var router = express.Router();
var VisitorController = require ('../Controllers/VisitorController.js');

router.get('/', function(req, res){
  res.console('this page');
});

router.get('/VisitorView', VisitorController.VisitorViewGymPage);




module.exports = router;
