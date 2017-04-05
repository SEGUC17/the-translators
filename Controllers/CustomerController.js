let product = require('../Models/ProductModel.js');
let booking = require('../Models/BookingModel.js');
let cust = require('../Models/CustomerModel.js');

let CustomerController = {
  var orderedProduct = req.body.uploadproducts;
  var qty = 0;
  var currCustomer = req.body.customer;
  viewCart: function(req, res){
    currCustomer.find({username: req.params.username}, function(err, currCustomer){
      if (err){
        res.send(err.message);}
      else{
        res.json(currCustomer.shoppingcart);}
    }
  },
  addToCart:function(req, res){
      currCustomer.shoppingcart.unshift(req.body.orderedProduct);
      qty++;
      res.json(qty);
  },
  removeFromCart:function(req, res){
      var index = currCustomer.shoppingcart.find({}, doc.getElementById("req.body.orderedProduct"))
      res.splice(index);
  }
  // createBooking: function(req, res){
  //   var bookingReq = new Booking();
  // }
}

module.exports = CustomerController;
