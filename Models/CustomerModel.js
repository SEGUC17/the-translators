var mongoose = require('mongoose');

var purchaseSchema = mongoose.Schema({
  //this schema is used now until we use stripe the payment module in sprint 2

    FirstName: {//get from the profile of the user
      type:String,
      required:true,
    },
    LastName: {//get from the profile of the user
      type:String,
      required:true,
    },
    email:{// get from the profile of the user
      type: String,
      required: true,
    },
    mobileNum: {
      type: String,
      required: true,
    },
    Prices: {// total price
        type:Number,
        required: true,
    },
    CreditcardHolderName: {
      type: String,
      required: true,
    },
    CreditCardNum: {
      type:Number,
      required:true,

    },
    CreditcardExpirationdate: {
      type: Date,
      required: true,
    },
    BillingAddress: {
      type:String,
      required:true,
    }
}
)

module.exports = purchaseSchema;
