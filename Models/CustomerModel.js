var mongoose = require('mongoose');

//Customer Schema
var CustomerSchema = mongoose.Schema({

  firstname:{
    type:String,
    required:true
  },

  lastname:{
    type:String,
    required:true
  },

  age:{
    type:Number,
    required:true
  },

  username:{
    type:String,
    required:true,
    unique:true
},

  email:{
    type: String,
    required:true,
    unique:true

},
  password:{
    type:String,
    required:true
},

  mobilenumber:{
    type:Number,
    required:true
},
  gender:{
    type:Boolean,
    required:true
},
shoppingcart:{
  type:Array
}

 })

var Customer = mongoose.model('Customer',CustomerSchema);
module.exports = Customer;
