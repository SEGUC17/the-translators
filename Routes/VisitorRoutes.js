var express = require('express');
var router = express.Router();

var VisitorController = require('../Controllers/VisitorController.js');

router.get('/visitor', function(req, res){
  res.send('this visitor page');
})

//routes for register function
router.get('/register', function(req,res){
  res.send('register');
})

router.post('/register', VisitorController.createregister);

router.get('/VisitorView', VisitorController.VisitorViewGymPage);

module.exports = router;
