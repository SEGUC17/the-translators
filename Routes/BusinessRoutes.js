var express = require('express');

var router = express.Router();

var BusinessController = require('../Controllers/BusinessController');
router.post("/BusinessOwnerSubscribtion", BusinessController.gymSubscribtion);

router.post("/UpdatedGymSchedule", BusinessController.uploadGymSchedule) ;
module.exports = router;
