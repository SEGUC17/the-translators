var express = require('express');
var router = express.Router();
var passport = require('passport');

var VisitorController = require('../Controllers/VisitorController');

passport.authenticate('jwt' ,{session:false});

//routes for register function
router.get('/VisitorView', function(req,res){
  res.render('pages/VisitorView');
})

router.post('/Customer', VisitorController.createregister);
router.get('/visitorView', VisitorController.VisitorViewGymPage);

module.exports = router;
