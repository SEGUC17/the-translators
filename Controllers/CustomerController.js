/*requiring an instance from the product and the customer tables in the model folder*/
let product = require('../Models/ProductModel.js');
let Customer = require('../Models/CustomerModel');
let customerController = {

/*viewing the shopping cart*/
  viewCart: function(req, res){
    Customer.find({shoppingcart: req.params.shoppingcart}, function(err, shoppingcart){
      if (err){
        res.send(err.message);}
      else{
        res.json(shoppingcart);}
    });
  },
  /*adding an item to the shopping cart*/
  addToCart:function(req, res){
      Customer.find({shoppingcart:req.params.shoppingcart}).unshift(product);
      qty++;
      res.json(qty);
  },
  /*removing an item from the shopping cart*/
  removeFromCart:function(req, res){
      Customer.find({shoppingcart:req.params.shoppingcart}).splice(product);
      qty--;
      res.json(qty);
  }
}

/*exporting the controller*/
module.exports = customerController;
