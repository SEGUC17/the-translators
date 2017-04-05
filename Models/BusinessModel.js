var mongoose = require('mongoose');



var BusinessSchema = mongoose.Schema({

  GymName_location: {type: String, required: true, unique: true},

  Address: {type: String, required: true},

  Email: {type: String, required: true, unique: true},

  BusinessUsername: {type: String, required: true, unique: true},

  Password: {type: String, required: true},

  Description: String,

  PhoneNumber: {type: Number, required: true},

  BankName: {type: String, required: true},

  AccountNumber: {type: String, required: true},

  Schedules: [String],

  Description: {type: String, required: true}

})



var Gym = mongoose.model("Business", BusinessSchema);

module.exports = Gym;
