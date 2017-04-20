/*requiring an instance from the product and the customer tables in the model folder*/
let uploadproducts = require('../Models/ProductModel.js');
let customer = require('../Models/CustomerModel.js');
// var qty = 0;
let CustomerController = {

/*viewing the shopping cart*/
viewCart: function(req, res){
  /*to find the logged in customer*/
customer.findOne({username: req.body.username}, function(err, cust){
  if (err){res.send(err.message);}
  /*if there is no such customer or he/she is not logged in*/
  else if(cust ==null){res.send("empty, try logging in correctly!!");}
  /*to show me the shopping cart*/
  else if (cust) {res.send(cust.shoppingcart);}
});
},
  /*adding an item to the shopping cart*/
  addToCart:function(req, res){
    /*to find the logged in customer*/
  customer.findOne({username: "NorhanHamdy"}, function(err, cust){
    if (err){res.send(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else {if(cust ==null){res.send("empty, try logging in correctly!!");}
    /*to push the selected product in the shopping cart array by finding this product*/
    else {if (cust) {cust.shoppingcart.unshift(uploadproducts.findOne({prodID: "abc123"},
       function(err, prod){
        if(err){res.send(err.message);}
        /*if no such product found*/
        else {if(prod ==null){
          res.send("no such product!!");
        }
        /*to show me that product*/
        else { if(prod){
          /*to increment the quantity of items in the shopping cart*/
          // qty++;
          res.send(cust.shoppingcart);
        }
      }}
      }))};
    }
  }
  })},
  /*removing an item from the shopping cart*/
  removeFromCart:function(req, res){
    /*to find the logged in customer*/
  customer.findOne({username: req.body.username}, function(err, cust){
    if (err){res.send(err.message);}
    /*if there is no such customer or he/she is not logged in*/
    else if(cust ==null){res.send("empty, try logging in correctly!!");}
    /*to remove the selected product in the shopping cart array by finding this product*/
    else if (cust) {cust.shoppingcart.splice(uploadproducts.findOne({prodID: req.body.prodID}, function(err, prod){
        if(err){res.send(err.message);}
        /*if no such product found*/
        else {if(prod ==null){res.send("no such product!!");}
        /*to show me that product*/
        else {if(prod){
          /*to decrement the quantity of items in the shopping cart*/
          // qty--;
          res.send(cust.shoppingcart);}}}
      }))};

})}}


/*exporting the controller*/
module.exports = CustomerController;
