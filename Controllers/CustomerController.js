// let product = require('/home/norhan/Desktop/the-translators/Models/ProductModel.js');
let product = require('../Models/ProductModel.js');
let cust = require('../Models/CustomerModel.js');
// let b = require("uploadproducts.productSchema");
let CustomerController = {

  // var orderedProduct = uploadproducts.find({prodID: req.params.prodID});
  // require (product.productSchema);
  // var orderedProduct = require('../Models/ProductModel.js');
  // var currCustomer = customer.find({username: req.params.username});
  // var qty = 0;
  viewCart: function(req, res){
    cust.find({shoppingcart: req.params.shoppingcart}, function(err, shoppingcart){
      if (err){
        res.send(err.message);}
      else{
        res.json(shoppingcart);}
    });
  },
  addToCart:function(req, res){
      cust.find({shoppingcart:req.params.shoppingcart}).unshift(product);
      qty++;
      res.json(qty);
  },
  removeFromCart:function(req, res){
      cust.find({shoppingcart:req.params.shoppingcart}).splice(product);
      qty--;
      res.json(qty);
  }
}

module.exports = CustomerController;
