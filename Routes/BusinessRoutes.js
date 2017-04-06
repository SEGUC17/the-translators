var express = require('express');

var router = express.Router();
var BusinessController = require('../Controllers/BusinessController');

// router.get('/', function(req, res){
//   res.console('this page');
// });

// router.post('/editproducts', function(req, res){
//   res.send('this is edit products');
// });
router.get('/editproducts', BusinessController.editproducts);


module.exports = router;
