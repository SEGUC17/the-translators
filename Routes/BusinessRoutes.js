//identifying dependencies
var express = require("express");
var router = express.Router();

var BusinessController = require("../Controllers/BusinessController");

//var Business= require("../Models/BusinessModel");
router.post("/viewproducts", BusinessController.viewproducts);

router.post("/updatedgymschedule", BusinessController.uploadGymSchedule);

router.post("/editproducts", BusinessController.editproducts);

router.post("/removeproducts", BusinessController.removeproducts);

router.post("/uploadproducts", BusinessController.createproduct);

module.exports = router;
