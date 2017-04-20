var mongoose = require('mongoose');

var BookingSchema = mongoose.Schema({
  CustomerUsername:{type: String, required: true, unique: true},
  GymName: {type: String, required: true, unique: true},
  selectedClass: String,
  selectedTime: ,
  selectedDate: ,
  CustomerEmail: {type: String, required: true, unique: true},
  CustomerMobile: Number,
  // Confirmation:{type: }
})
var Book = mongoose.model("Booking", BookingSchema);

module.exports = Book;
