var mongoose= require('mongoose');
var uploadscheduleSchema= mongoose.Schema({
//Business username and schedule of all timings
business_username:
{type: String, required: true, unique: true},
schedule:
{type: String, required:true, unique: true},
});
var uploadschedule= mongoose.model("upload schedule",uploadschedule);
module.exports= uploadschedule;
