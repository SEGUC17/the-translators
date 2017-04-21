var express = require('express');

var router = express.Router();
var VisitorController = require ('../Controllers/VisitorController');

router.get('/tasks', function(req, res){
  res.json('index.html');
});

router.get('/visitorView', VisitorController.VisitorViewGymPage);




module.exports = router;
