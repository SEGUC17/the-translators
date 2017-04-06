var mongoose= require ('mongoose');
var Schema = mongoose.Schema;
var gymSchema =  new Schema({
    GymName_location:
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

    description:
        {type:String},
    phoneNumber:
        {type:Number,required:true},
    BankName:
        {type:String,required:true},
    AccountNumber:
        {type:String,required:true},
    schedules:
        {type:Schema.Types.Mixed},//IMAGE


});

var gym=  mongoose.model("Gym", gymSchema);
module.exports= gym;
