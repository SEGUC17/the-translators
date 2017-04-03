var mongoose = require('mongoose');

//schema for booking classes
var BookingSchema = mongoose.Schema({
  CustomerUsername:{type: String, required: true, unique: true},
  GymName: {type: String, required: true, unique: true},
  selectedClass: String,
  selectedTime: ,
  selectedDate: ,
  CustomerEmail: {type: String, required: true, unique: true},
  CustomerMobile: Number,
  Confirmation:{type: }
})

//create the model
var Book = mongoose.model("Booking", BookingSchema);

//export the model
module.exports = Book;
