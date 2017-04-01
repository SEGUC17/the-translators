var mongoose = require('mongoose');

var ReviewandRateSchema = mongoose.Schema(
  {
    GymName : {type:String , unique:true},
    BusinessUserName {type : String , unique :true},
    GymProduct : {type:String}
    GymReview :{type:Array },
    GymRating: [ RatingSchema ]
  });

  ReviewandRateSchema.findOne(BusinessUserName).populate('ratings._item').exec(function(err, user) {
    if (err || !user)
    return next(new Error('User not found'));
    console.log(user.GymRating);
  });

  var user = mongoose.model ('Business', ReviewandRateSchema);
  module.exports = user;
