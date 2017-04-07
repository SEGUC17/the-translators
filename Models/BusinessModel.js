<<<<<<< HEAD
var mongoose = require('mongoose');



var BusinessSchema = mongoose.Schema({

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

  Description: {type: String, required: true}

})



var Gym = mongoose.model("Business", BusinessSchema);

module.exports = Gym;
=======
<<<<<<< HEAD
var mongoose= require ('mongoose');
var Schema = mongoose.Schema;
var gymSchema =  new Schema({
    GymNameLocation:
        {type: String, required: true, unique:true},

    address:
        {type: String, required:true},
    Email:
        {type: String, required:true,unique:true},
    username:
        {type:String,required:true,unique:true},
    password:
        {type: String, required:true},

    description:
        {type:String},
    phoneNumber:
        {type:Number,required:true},
    BankName:
        {type:String,required:true},
    AccountNumber:
        {type:String,required:true},
    schedules:
        {type:Schema.Types.Mixed},
        ProdList: Array,
        GymReview: Array,
        GymRating: [RatingSchema]

});




var Rating = BusinessSchema.find(BusinessUsername).populate('ratings._item').exec(function(err, user){
  if(err || !user)
  return next(new Error('User not found!'));
  console.log(user.GymRating);
});

var gym =  mongoose.model("Gym", gymSchema);
module.exports= gym;
>>>>>>> ab2bb518bd208994b53945055edb2c046e73565a
