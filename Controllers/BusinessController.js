let Business = require('../Models/BusinessModel');
let Product = require('../Models/ProductModel');

let BusinessController = {
  // this function should allow the business owner to edit his already existing products
    editproducts: function (req,res){
      uploadproducts.findOne({businessUserName:req.user.username}, function(err, uploadproducts)
        {
          if(err)
            {//Internal Error
                console.log('error in edit products');
                res.json(err.message);
            }else{//BusinessDB found. Check all given parameters, if given, change it.
                if(uploadproducts)
                {
                    if(req.prodname)
                    {
                        uploadproducts.prodname = req.body.prodname;
                    }
                    if(req.price)
                    {
                        uploadproducts.price = req.Number.price;
                    }
                    if(req.image)
                    {
                        uploadproducts.image = req.markModified.image;
                    }
                    if(req.ProductDescription)
                    {
                        uploadproducts.ProductDescription = req.body.ProductDescription;
                    }

    }
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
  }
}
)}
  // removeproducts:function(req,res){
  //
  // }
  }

module.exports = BusinessController;
