var mongoose = require('mongoose');


//schema for purchasing
var PurchasingSchema = mongoose.Schema({
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

  selectedClass: String,

  selectedTime: ,

  selectedDate: Date,

  CustomerEmail: {
    type: String,
    required: true,
    unique: true
  },

  CustomerMobile: Number,
})

//create the model
var Purchase = mongoose.model("PurchasesTable", PurchasingSchema);

//export the model
>>>>>>> 4f02fd8983bbcb036112c8796e660ce15320d4d8
module.exports = Purchase;
