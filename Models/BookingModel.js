var mongoose = require('mongoose');
var UUID = require("node-uuid");

//Schema for client's booking

var BookingSchema = mongoose.Schema({

    User_ID: {type: String, default:function getUUID(){
        return UUID.v4();
    }},

    CustomerUsername: {
      type:String
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'Customer'
    },

    GymNameLocation: {
      type:String
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'Gym' //double check the name of the Model
    },

    selectedClass:{
      type:String,
      required: true
    },

    selectedTime: {
      type:String, 
      required: true
    },

    selectedDate: {
      type:Date,
      required:true
    },


    ConfirmationStatus:
     {
      type: String,
      enum:['Confirmed', 'Not Yet Confirmed','Class Not Available'],
      default: "Not Yet Confirmed",
      required:false,
      
    }
})

var Bookings = mongoose.model('Bookings', BookingSchema);

module.exports = Bookings;
