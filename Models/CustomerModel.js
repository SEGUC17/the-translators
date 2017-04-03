var mongoose = require('mongoose');

var purchaseSchema = mongoose.Schema({
    First Name: {//get from the profile of the user
      type:String,
      required:true,
    },
    Last Name: {//get from the profile of the user
      type:String,
      required:true,
    },
    email:{// get from the profile of the user
      type: String,
      required: true,
    },
    mobile Num: {
      type: String,
      required: true,
    },
    Prices: {// total price
        type:Number,
        required: true,
    },
    Credit-card Holder Name: {
      type: String,
      required: true,
    },
    Credit Card Num: {
      type:Number,
      required:true,

    },
    Credit-card Expiration date: {
      type: Date,
      required: true,
    },
    Billing Address: {
      type:String,
      required:true,
    }
}
)

module.exports = CustomerModel;
