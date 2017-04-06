var mongoose = require('mongoose');

//schema for business
var BusinessSchema = mongoose.Schema({

  GymNamelocation: {
    type: String,
    required: true, 
    unique: true
  },

  Address: {
    type: String, 
    required: true
  },

  Email: {
    type: String, 
    required: true, 
    unique: true
  },

  BusinessUsername: {
    type: String, 
    required: true, 
    unique: true
  },

  Password: {
    type: String, 
    required: true
  },

  Description: String,

  PhoneNumber: {
    type: Number, 
    required: true
  },

  BankName: {
    type: String, 
    required: true
  },

  AccountNumber: {
    type: String, 
    required: true
  },

  Description: {
    type: String, 
    required: true
  }
})

//create the model
var Gym = mongoose.model("Business", BusinessSchema);

//export the model
module.exports = Gym;
