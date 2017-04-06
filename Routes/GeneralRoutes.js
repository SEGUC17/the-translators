var express = require('express');

var router = express.Router();
var GeneralController = require('/home/norhan/Desktop/the-translators/Controllers/GeneralController.js');

router.get('/Filter', GeneralController.Filter);
router.post('/Filter', GeneralController.Filter);

module.exports = router;
