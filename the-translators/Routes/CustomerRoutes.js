var express = require('express');
var router = express.Router();
var CustomerController = require('../Controllers/CustomerController.js');

router.get('/viewcart', CustomerController.viewCart);
// router.get('/viewcart', function(req, res){
//   res.send('CustomerView.ejs');
// });
router.get('/addToCart', CustomerController.addToCart);//change this to post when we have a view
// router.post('/addToCart', function(req, res){
//   res.send('CustomerView.ejs');
// });
router.post('/removeFromCart', CustomerController.removeFromCart);//change this to post when we have a view
// router.post('/removeFromCart', function(req, res){
//   res.send('CustomerView.ejs');
// });

module.exports = router;
