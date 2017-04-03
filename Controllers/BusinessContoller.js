var mongoose = require('mongoose');
var  businessDB = mongoose.model('post');// needs to be changed


var sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};

module.exports.updateBusiness = function(req, res) {











}
