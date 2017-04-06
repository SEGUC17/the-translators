let bmod = require('../Models/BusinessModel.js');
let pmod = require('../Models/ProductModel.js');

let GeneralController = {
  Filter: function(view, params, callback) {
  var inputString;

  if (inputString = eventsCache[view+JSON.stringify(params)]) {
    callback(null, inputString);
  }
  else {
    db.view('inputString', view, params, function(err, body) {
      if (err) {
        console.log(err);
        callback(err, null);
      }
      else {
        if (body.rows.length == 0) {
          var msg = 'No match for: ' + view + ', ' + params;
          console.log(msg);
          callback(msg, null);
        }
        else {
          inputString = body.rows[0].value;
          eventsCache[view+JSON.stringify(params)] = inputString;
          callback(null, inputString);
        }
      }
    });
  }
}
}

module.exports = GeneralController;
