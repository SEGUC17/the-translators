var mongoose = require('mongoose');

//schema for product
var ProductSchema = mongoose.Schema({
  businessUserName:{type: String, required: true},//take input from login session
  prodname:String,
  prodID:{type: String, required: true, unique: true},
  price: Number,
  image:File,
  ProductDescription: String,
  Category: {type: String, required: true},
})

//create the model
var PlaceOrder = mongoose.model("Product", ProductSchema);

//export the model
module.exports = PlaceOrder;
