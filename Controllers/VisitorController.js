let visitor = require ('../models/visitormodel');
let VisitorController =  {

//function to make a visitor register to the website
createregister:function(req, res){
  var username = visitor.username;
  Student.findOne({studentusername:req.body.username},function(err,user){
if (err){
return done(err);
}

var password = req.body.pwd[0];
var password2 = req.body.pwd[1];
req.checkBody('pwd[0]','password donot match').equals(password2);

let visitor = new Visitor(req.body);

visitor.save(function(err, visitor){
if (err){
  res.send (err.message)
  console.log(err);
}
else {
  console.log(visitor);
// get a page not url
  res.render('clientprofile');
}
})
},
