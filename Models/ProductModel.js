var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
  businessUserName:{type: String, required: true, unique:true},//take input from login session
  prodname:type: String,
  prodID:{type: String, required: true, unique: true},
  price: type: Number,
  image:type: File,
  ProductDescription: type: String,
  Category: {type: String, required: true},
})
var UploadProducts = mongoose.model("uploadproducts", ProductSchema);



module.exports = UploadProducts;
