var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//creating schema for uploading products
var ProductSchema = mongoose.Schema({

  businessUserName:{
    type: String,
  },//take input from login session

  prodname: {
    type: String
  },

  prodID:{
    type: String,
    required: true,
    unique: true
  },

  price: {
    type:Number
  },

   image:{
     type: Schema.Types.Mixed
   },

  ProductDescription: {
    type: String
  },

  Category: {
    type: String,
    required: true
  }

=======
    type: String
  },

  prodname: {
    type: String
  },

  prodID:{
    type: String,
    required: true,
    unique: true
  },

  price: {
    type:Number
  },

   image:{
     type: Schema.Types.Mixed
   },

  ProductDescription: {
    type: String
  },

  Category: {
    type: String,
    required: true
  },

  Quantity:{
    type:Number,
    required: true
  }
});

var UploadProducts = mongoose.model("uploadproducts", ProductSchema);
module.exports = UploadProducts;
