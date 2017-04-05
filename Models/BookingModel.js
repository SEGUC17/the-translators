var mongoose = require('mongoose');
var DB_URI = 'monogdb://localhost:27017/GymPlatform';

var BookingSchema = mongoose.Schema({
    CustomerUsername: {type: String, required: true},
    GymName: {type: String, required: true},
    selectedClass:{type:String, required: true},
    selectedTime: {type:Number, required: true},
    selectedDate: {type:Date, required:true},
    CustomerEmail: {type: String, required: true},
    CustomerMobile: {type: Number, required:true},
    ConfirmationStatus: {type: String, default: "Not Yet Confirmed"}
});

var Booking = mongooes.model('Bookings', BookingSchema);

module.exports = Booking;
let Book = require('../Models/BookingModel');