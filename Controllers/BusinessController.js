
let business = require ('../Models/BusinessModel.js');
let p = require ('../Models/ProductModel.js');

let BusinessController = {//function to upload products
createproduct:function(req,res){
 let prod = new uploadproducts();
},
 postproducts:function(req,res){
   let products = new Products(req.body);
   //var products = new Array();
   products.post(function(err, products){      if(err){
       res.send(err.message);
       console.log(err.message);
     }
     else{
       console.log( document.getElementById().innerHTML = products );
       res.render('businesshomepage');
     }    });
   uploadproducts.save(function(err, products){      if(err){
       res.send(err.message)
       console.log(err);
     }
     else{
       console.log(products);
       res.render('businesshomepage');
     }
   })  }}
module.exports = BusinessController;
