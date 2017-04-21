var express = require('express');

var router = express.Router();
var VisitorController = require ('../Controllers/VisitorController');

router.get('/VisitorView', function(req,res){
  res.render('pages/VisitorView');
})

router.get('/visitorView', VisitorController.VisitorViewGymPage);




module.exports = router;
