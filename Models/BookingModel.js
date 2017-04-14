var mongoose = require('mongoose');
//Schema for client's booking

var Schema = mongoose.Schema;

var BookingSchema = mongoose.Schema({


    CustomerUsername: {
      type: String,
      required: true
    },

    GymNameLocation: {
      type: String,
      required: true
    },

    selectedClass:{
      type:String,
      required: true
    },

    selectedTime: {
      type:Number,
      required: true
    },

    selectedDate: {
      type:Date,
      required:true
    },

    CustomerEmail: {
      type: String,
      required: true
    },

    CustomerMobile: {
      type: Number,
      required:true
    },

    ConfirmationStatus: {
      type: String,
      enum:['Confirmed', 'Not Yet Confirmed','Class Not Available'],
      default: "Not Yet Confirmed"
    }
});

var Booking = mongoose.model('Bookings', BookingSchema);

module.exports = Booking;
