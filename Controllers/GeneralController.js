/*requiring an instance from the business and the product tables in the model folder*/
let bmod = require('../Models/BusinessModel.js');
let pmod = require('../Models/ProductModel.js');

let GeneralController = {

  /*filter function that acts like the search function but it finds by the input sent by the user*/
  Filter: function(view, params, callback) {
  var inputString;
/*that takes the input from the user and changes it's type to string*/
  if (inputString = eventsCache[view+JSON.stringify(params)]) {
    callback(null, inputString);
  }
  /*to return an error msh if there's an error in the input string*/
  else {
    db.view('inputString', view, params, function(err, body) {
      if (err) {
        console.log(err);
        callback(err, null);
      }
      /*to return a message saying that there is no match in the database for the input string provided by the user*/
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
