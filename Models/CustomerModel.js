/*var mongoose = require('mongoose');

var ReviewandRateSchema = mongoose.Schema(
  {
    GymName_location: {type:String , unique:true , required :true},
    BusinessUsername {type : String , unique :true , required :true},
    GymProduct : {type:String}
    GymReview :{type:Array },
    GymRating: [ RatingSchema ]
  });

  ReviewandRateSchema.findOne(BusinessUsername).populate('ratings._item').exec(function(err, user) {
    if (err || !user)
    return next(new Error('User not found'));
    console.log(user.GymRating);
  });

  var user = mongoose.model ('Business', ReviewandRateSchema);
  module.exports = user;
*/
