var express = require('express');
var router = express.Router();
var VisitorController = require('../controllers/VisitorController');

router.get('/', function(req, res){
  res.console('this page');
});

//routes for register function
router.get('/register', function(req,res){
  res.send('register');
})
router.post('/register', VisitorController.createregister);

module.exports = router;
