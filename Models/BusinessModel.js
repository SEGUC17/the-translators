var mongoose = require('mongoose');

var BusinessSchema = mongoose.Schema({
  prodname:String,
  ID:{type: String, required: true, unique: true},
  price: double,
  image:{type: String, data: Buffer},
  businessOwnerName:{type: String, required: true},
  ProductDescription: String
})

var Product = mongoose.model("addToCart", BusinessSchema);

module.exports = Product;
