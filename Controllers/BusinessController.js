let Business = require('../Models/BusinessModel');

let BusinessController = {

    editproducts: function (req,res){
      UploadProducts.findByIdAndUpdate({businessUserName: req.params.businessUserName},
        {
        Product Name: req.body.prodname,
        Product_ID: req.body.prodID,
        Price: req.Number.price,
        image:req.File.image,
        Product Description: req.body.ProductDescription,
        Category: req.body.Category
      },
      function(err, docs){
        if(err) res.json(err);
        else{
          console.log(docs);
          res.send("done");
        }
      }
    });
    }





module.exports = BusinessController;
