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

});

var gym =  mongoose.model("Gym", gymSchema);
module.exports= gym;
