var mongoose = require('mongoose');

//schema for booking classes
var BookingSchema = mongoose.Schema({

  CustomerUsername:{
  	type: String, 
  	required: true, 
  	unique: true
  },

  GymName: {
  	type: String, 
  	required: true, 
  	unique: true
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
  	default: "Not Yet Confirmed"
  }
})

//create the model
var Book = mongoose.model("Booking", BookingSchema);

//export the model
module.exports = Book;
