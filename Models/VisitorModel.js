var mongoose = require('mongoose');

var VisitorSchema = mongoose.Schema(
  {
    gymname : {type:String , unique:true},
    gymdescription : {type:String , unique:true},
    gymreview :{type:String},
    gymimgage:{ data: Buffer, contentType: String },
    gymschedule:{ data: Buffer, contentType: String },
    gymproduct : {type:String , unique: true},
    gymrating: [ RatingSchema ]
  });

  VisitorSchema.findOne(id).populate('ratings._item').exec(function(err, user) {
    if (err || !user)
    return next(new Error('User not found'));
    console.log(user.gymrating);
  });

  var user = mongoose.model ('Customer', VisitorSchema);
  module.exports = user;
