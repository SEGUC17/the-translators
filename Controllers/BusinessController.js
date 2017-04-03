let business = require ('../models/businessmodel');
let businesscontroller = {


//function to upload products
createproduct:function(req,res){
  let uploadproducts = new Uploadproducts(req.body);

  postproducts:function(){
    let products = new Products (req.body);
    var products = new Array();
    products.post(function(err, products){

      if(err){
        res.send(err.message)
        console.post(err);
      }
      else{
        console.post( document.getElementById().innerHTML = products );
        res.render('businesshomepage');
      }

    })
    uploadproducts.save(function(err, products){

      if(err){
        res.send(err.message)
        console.log(err);
      }
      else{
        console.log(products);
        res.render('businesshomepage');
      }
    })

  }

},
