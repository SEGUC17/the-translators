var mongoose = require('mongoose');



var ProductSchema = mongoose.Schema({

  businessUserName:{type: String, required: true},//take input from login session

  prodname:String,

  prodID:{type: String, required: true, unique: true},

  price: Number,

  image:{type: File},

  ProductDescription: String,

  Category: {type: String, required: true}

  //TotalPrice for hanna's checkout funx

})

var PlaceOrder = mongoose.model("Product", ProductSchema);



module.exports = PlaceOrder;
