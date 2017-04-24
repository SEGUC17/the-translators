var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var config = require('../config/database');

var BusinessController = require('../Controllers/BusinessController');
var CustomerController = require('../Controllers/CustomerController');

module.exports = function(passport){
    let opts = {};

    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done){
        BusinessController.getBusinessById(jwt_payload.sub, function(err, business){
            if(err){
                return done(err, false);
            }

            if(business){
                return done(null, business);
            } else{
                return done(null, false);
            }
        })

        CustomerController.getCustomerById(jwt_payload.sub, function(err, customer){
            if(err){
                return done(err, false);
            }

            if(customer){
                return done(null, customer);
            } else{
                return done(null, false);
            }
        })
    }));
}