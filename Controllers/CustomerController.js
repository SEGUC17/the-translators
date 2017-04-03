let Customer = require('../Models/CustomerModel');

  let CustomerController = {
    CheckoutSum: function(req, res){
 var sum = 0.0;
 var qty = 0;
 for(int i = 0; i< shoppingCart.length; i++){
   sum += shoppingCart[i].find({}, doc.getElementById("orderedProduct.price"));
   qty++;
 }
 res.render("sum");
  }
}


  module.exports = CustomerController;
