let product = require('./Models/BusinessModel.js');

let CustomerController = {
  var shoppingCart = [];
  var orderedProduct = new Product();
  viewCart: function(req, res){
      shoppingCart.find({}, function(err, orderedProduct){
        if(err){
          res.send(err.message);
        }
        else{
          res.render('/', {shoppingCart: orderedProduct});
        }
      })
  },
  addToCart:function(req, res){
    if(shoppingCart.length > 0){
      shoppingCart.unshift(orderedProduct);
    }
    else{
      shoppingCart = new shoppingCart[];
      shoppingCart.unshift(orderedProduct);
    }
  }
  removeFromCart:function(req, res){
    if(shoppingCart.length > 0){
      var index = shoppingCart.find({}, doc.getElementById("orderedProduct")){
      shoppingCart.splice(index);
      }
    }
    else{
      res.json("shopping cart is empty!");
    }
  }

}

module.exports = CustomerController;
