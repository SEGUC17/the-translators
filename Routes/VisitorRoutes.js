var express = require('express');
var router = express.Router();
let Gym = require ('../Models/BusinessModel');
var VisitorController = require ('../Controllers/VisitorController');

router.get('/', function(req, res){
  res.send('this page');
});

router.get('/visitorView', VisitorController.VisitorViewGymPage);

module.exports = router;
