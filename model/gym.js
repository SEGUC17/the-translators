var mongoose= require ('mongoose');
var gymSchema = mongoose.Schema({
    gym_name:
        {type: String, required: true},
    username: String,
    location:
        {type: String, required:true},
    Email:
        {type: String, required:true, unique:true},
    password:
        {type: String, required:true},
    // confirm_password: maynfa3shy tkooon maogooda
    //     {type:String, required:true},
    schedules:
        {type:JPEG, required:true},//IMAGE
    //price:
    //    {type:String, required:true},
    //product_name:
    //    {type:String},
    //product_description:
    //    {type:String},
    Gym_description:
        {type:String, required:true}
});

var gym=  mongoose.model("Gym", gymSchema);
module.exports= gym;
