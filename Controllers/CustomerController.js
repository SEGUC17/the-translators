let Customer = require('../Models/CustomerModel.js');

let CustomerController = {

    getAllCustomers:function(req, res){

      var Firstname =  req.body.firstname;
      var Lastname = req.body.lastname;
      var username = req.body.username;
      var gender = req.body.gender;
      var age = req.body.age;
      var email = req.body.email;

        Customer.find({username : username }).toArray (function(err,result)
        {
            if(err)
              throw err;
            else if (result.length)
            {
              res.render ('CustomerView');
            }
            else
            {
              res.status(404).send('Not found');

            }

        })
      }
    }
    //view page profile

      module.exports = CustomerController ;
