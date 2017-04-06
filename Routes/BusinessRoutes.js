var express = require('express');
var router = express.Router();

var BusinessController = require('../Controllers/BusinessController');

router.post('/businessownersubscribtion', BusinessController.gymSubscribtion);

router.post('/updatedgymschedule', BusinessController.uploadGymSchedule);

module.exports = router;
