var mongoose = require('mongoose');

var GeneralSchema = mongoose.Schema({
  byName: String,
  byLocation: String,
  byPrice: {type: String, },

})
var General = mongoose.model("Filter", GeneralSchema);

module.exports = General;
