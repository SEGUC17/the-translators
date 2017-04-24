var mongoose = require('mongoose');


//schema for purchasing
var PurchasingSchema = mongoose.Schema({
  CustomerUsername:{
    type: String,
    required: true,
  },

  GymName: {
    type: String,
    required: true,
    
  },


  CustomerEmail: {
    type: String,
    required: true,
  },

  CustomerMobile: Number,
})

//create the model
var Purchase = mongoose.model("PurchasesTable", PurchasingSchema);

//export the model
module.exports = Purchase;
