let product = require('../Models/ProductModel.js');
let booking = require('../Models/BookingModel.js');
let cust = require('../Models/CustomerModel.js');

let CustomerController = {
  // var shoppingCart = new customer.shoppingcart();
  var orderedProduct = new Product();
  var qty = 0;
  var currCustomer = new customer();
  viewCart: function(req, res){
    currCustomer.find({username: request.params.username}, function(err, currCustomer){
      if (err){
        res.send(err.message);
      }
      else
        res.json(currCustomer.shoppingcart);
    })
    // orderedProduct.find({}, function(err, Customer.shoppingcart){
        // if(err){
        //   res.send(err.message);
        // }
        // else{
        //   res.render('/', {shoppingcart});
        // }
      })
  },
  addToCart:function(req, res){
      shoppingcart.unshift(orderedProduct);
      qty++;
      res.json(qty);
  },
  removeFromCart:function(req, res){
    if(orderedProduct.shoppingcart.length > 0){
      var index = shoppingCart.find({}, doc.getElementById("orderedProduct")){
      shoppingCart.splice(index);
      }
    }
    else{
      res.json("shopping cart is empty!");
    }
  },
  createBooking: function(req, res){
    var bookingReq = new Booking();
    // bookingReq.find({}, doc.getElementById("bookingReq.CustomerUsername"));
  }
}

module.exports = CustomerController;
