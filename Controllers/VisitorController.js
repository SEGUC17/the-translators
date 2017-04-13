let Customer = require ('../Models/CustomerModel');
let VisitorController =  {

createregister:function(req, res){
  var username = Customer.username;
  Customer.findOne({username:req.body.username},function(err,user){
if (err){
return done(err);
}

let visitor = new Customer(req.body);

visitor.save(function(err, visitor){
if (err){
  res.send (err.message)
  console.log(err);
}
else {
  console.log(visitor);

  res.send('registration done');
}
})
})
}
}

module.exports = VisitorController;
