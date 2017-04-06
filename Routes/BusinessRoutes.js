var express = require('express');
var router = express.Router();

var BusinessController = require('../Controllers/BusinessController');

 router.get('/', function(req,res){
  return res.send('Welcome to our platform') });

router.post('/businessownersubscription', BusinessController.gymsubscription);

router.post('/updatedgymschedule', BusinessController.uploadGymSchedule);

module.exports = router;
