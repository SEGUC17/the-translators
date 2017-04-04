let Business = require('../Models/BusinessModel');
let Product = require('../Models/ProductModel');

let BusinessController = {
  // this function should allow the business owner to edit his already existing products
    editproducts: function (req,res){
      uploadproducts.findByIdAndUpdate({businessUserName: req.params.businessUserName},
        {
          // here i take the new input for each of these attributes that can be changed
      var Product Name: req.body.prodname,
      //  Product_ID: req.body.prodID,
      var Price: req.Number.price,
      var image:req.File.image,
      var Product Description: req.body.ProductDescription,
      //  Category: req.body.Category
      },
      function(err, docs){
        if(err)
        res.json(err);
        else{
          console.log(docs);
          res.json("done");
        }
      },
      //then save the changed data and save it to the designated table
      uploadproducts.save(function(err, products){

      if(err){
        res.send(err.message)
        console.log(err);
      }
      else{
        console.log(uploadproducts);

      }
    })
  )};
  // removeproducts:function(req,res){
  //
  // }
  }






module.exports = BusinessController;
