var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_RCu8dWWMQ4VYFDJmFsTVJSUY');


router.get('/',function(req,res){
    res.render('index',{

    });
});

router.get('/success',function(req,res){
    res.render('success',{
        
    });
});

router.post('/charge',function(req,res){
    var Token = req.body.stripeToken;
    var chargeAmount = req.body.chargeAmount;
    var charge = stripe.charges.create({
        amount:chargeAmount,
        currency:"usd",
        source: Token
    },function(err,charge){
        if(err && err.type === "StripeCardError"){
            console.log("stripeCardError")
        }
    });
    console.log("successfully paid!");

    res.render("success");

    
});


module.exports=router;