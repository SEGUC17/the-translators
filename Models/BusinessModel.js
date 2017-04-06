var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gymSchema = mongoose.Schema({

  GymName_location: {type: String, required: true, unique: true},

  Address: {type: String, required: true},

  Email: {type: String, required: true, unique: true},

  BusinessUsername: {type: String, required: true, unique: true},

  Password: {type: String, required: true},

  Description: String,

  PhoneNumber: {type: Number, required: true},

  BankName: {type: String, required: true},

  AccountNumber: {type: String, required: true},

  Schedules: [String],

  Description: {type: String, required: true},

  ProdList: Array,
  
  GymReview: Array,
        
  GymRating: [RatingSchema]

})

var Rating = BusinessSchema.find(BusinessUsername).populate('ratings._item').exec(function(err, user){
  if(err || !user)
  return next(new Error('User not found!'));
  console.log(user.GymRating);
});

var Rating = BusinessSchema.find(BusinessUsername).populate('ratings._item').exec(function(err, user){
  if(err || !user)
  return next(new Error('User not found!'));
  console.log(user.GymRating);
});

var Gym = mongoose.model("Gym", gymSchema);

module.exports = Gym;
