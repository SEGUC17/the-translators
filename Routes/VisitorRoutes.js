var express = require('express');
var router = express.Router();
var VisitorController = require('../Controllers/VisitorController.js');

router.get('/visitor', function(req, res){
  res.send('this visitor page');
})

//routes for register function
router.get('/VisitorView', function(req,res){
  res.render('VisitorView');
})

router.post('/CustomerModel', VisitorController.createregister);


module.exports = router;
