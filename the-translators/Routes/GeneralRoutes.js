var express = require('express');

var router = express.Router();
var GeneralController = require('../Controllers/GeneralController.js');

router.get('/', GeneralController.FilterProd);
router.get('/', GeneralController.Filtergym);

module.exports = router;
