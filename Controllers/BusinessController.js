let Business = require('../Models/BusinessModel');
let Product = require('../Models/ProductModel');

let BusinessController = {
  // this function should allow the business owner to edit his already existing products
    editproducts: function (req,res){
      uploadproducts.findOne({businessUserName:req.user.username}, function(err, res)
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
                        res.prodname = req.body.prodname;
                    }
                    if(req.price)
                    {
                        res.price = req.body.price;
                    }
                    if(req.image)
                    {
                        res.image = req.body.image;
                    }
                    if(req.ProductDescription)
                    {
                        res.ProductDescription = req.body.ProductDescription;
                    }

    }
      //then save the changed data and save it to the designated table
      uploadproducts.save(function(err, res){

      if(err){
        res.send(err.message)
        console.log(err);
      }
      else{
        console.log(res);

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
