
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

