var mongoose = require('mongoose');

var PurchasingSchema = mongoose.Schema({
  CustomerUsername:{type: String, required: true, unique: true},
  GymName: {type: String, required: true, unique: true},
  selectedClass: String,
  selectedTime: ,
  selectedDate: Date,
  CustomerEmail: {type: String, required: true, unique: true},
  CustomerMobile: Number,
  //Confirmation:{type: }
})
var Purchase = mongoose.model("PurchasesTable", PurchasingSchema);

module.exports = Purchase;
