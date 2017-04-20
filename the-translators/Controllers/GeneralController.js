/*requiring an instance from the business and the product tables in the model folder*/
let bmod = require('../Models/BusinessModel.js');
let pmod = require('../Models/ProductModel.js');
var eventsCache = require('eventcache');

let GeneralController = {

  /*filter function that acts like the search function but it finds by the input sent by the user*/
  FilterProd: function(view, params, callback) {
  var inputString = {};

    pmod.find('inputString', view, params, function(err, body) {
      if (err) {
        console.log(err);
        callback(err, null);
      }
      /*to return a message saying that there is no match in the database for the input string provided by the user*/
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
    });
},

Filtergym: function(view, params, callback) {
var inputString = {};

  bmod.find('inputString', view, params, function(err, body) {
    if (err) {
      console.log(err);
      callback(err, null);
    }
    /*to return a message saying that there is no match in the database for the input string provided by the user*/
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
  });
}
}

module.exports = GeneralController;
