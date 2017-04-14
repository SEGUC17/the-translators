var express = require('express');
var router = express.Router();

var VisitorController = require('../Controllers/VisitorController');

//routes for register function
router.get('/VisitorView', function(req,res){
  res.render('pages/VisitorView');
})

router.post('/CustomerModel', VisitorController.createregister);
router.get('/VisitorView', VisitorController.VisitorViewGymPage);

module.exports = router;
