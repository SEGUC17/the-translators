var mongoose = require('mongoose');

var businessSchema = mongoose.Schema({
	username:{
		type:String,
		required:true,
		unique:true,
		index: true
	},
	password:{
		type:String,
		required:true,
		minlength:8
	},
});

var Business = mongoose.model('Business', businessSchema);

module.exports = Business;