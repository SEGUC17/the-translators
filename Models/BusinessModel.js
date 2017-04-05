var mongoose= require ('mongoose');
var gymSchema = mongoose.Schema({
    gymname-location:
        {type: String, required: true, unique:true},
//username: String,
    address:
        {type: String, required:true},
    Email:
        {type: String, required:true,unique:true},
    username:
        {type:String,required:true,unique:true},
    password:
        {type: String, required:true},
    // confirm_password: maynfa3shy tkooon maogooda
    //     {type:String, required:true},
    description:
        {type:String},
    phone number:
        {type:Number,required:true},
    Bank name:
        {type:String,required:true},
    Account number:
        {type:String,required:true},
    schedules:
        {type:File},//IMAGE
    //price:
    //    {type:String, required:true},
    //product_name:
    //    {type:String},
    //product_description:
    //    {type:String},

});

var gym=  mongoose.model("Gym", gymSchema);
module.exports= gym;

// var mongoose= require('mongoose');
// var uploadscheduleSchema= mongoose.Schema({
// //Business username and schedule of all timings
// business_username:
// {type: String, required: true, unique: true},
// schedule:
// {type: String, required:true, unique: true},
// });
// var uploadschedule= mongoose.model("upload schedule",uploadschedule);
// module.exports= uploadschedule;
