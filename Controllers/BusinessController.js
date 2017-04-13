
let Business = require ('../Models/ProductModel.js');

//function to upload products
let BusinessController = {

createproduct:function(req,res){
let prod = new Business(req.body);
   prod.save(function(err, prod){
     if(err){
       res.send(err.message)
       console.log(err);
     }
     else{
       console.log(prod);
       res.send('Products are uploaded');
     }
   })  }}
module.exports = BusinessController;
