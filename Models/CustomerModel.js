var mongoose = require('mongoose');

//creating schema for visitor registration form
var visitorregistrationformSchema = mongoose.Schema({

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
    required:true,
    minlength:8
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

var Customer = mongoose.model("customer",visitorregistrationformSchema);
module.exports = Customer;
