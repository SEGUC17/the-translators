let Customer = require('../Models/CustomerModel.js');

let CustomerController = {

    getCustomer:function(req, res){

      // retrieve username of the customer from session
      var username = req.user.username;

      // fetch the logged in customer from the database using the username retrieved
      Customer.findOne({username : username }, function(err,result)
      {
          // handle error
          if(err){
            throw err;
          }
          // show 404 status if no result returned
          else if(!result){
            res.status(404).send('Not found');
          }
          // redirect to the CustomerView page and send the customer object fetched
          else
          {
            res.render ('CustomerView', {customer: result});
          }

      })
    }
  }
    //view page profile

  module.exports = CustomerController ;
