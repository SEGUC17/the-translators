let Business = require('../Models/BusinessModel');

let BusinessController = {

    getAllBusinesses:function(req, res){

    var gymname = req.body.GymName_location ;
    var address = req.body.Address;
    var email = req.body.Email;
    var username = req.body.BusinessUsername;
    var description =  req.body.Description;
    var phonenumber = req.body.PhoneNumber ;
    var schedule = req.body.Schedules;
    var product = req.body.ProdList;
    var review = req.body.GymReview ;
    var rate = req.body.GymRating;

              Business.find({username : username }).toArray (function(err,result)
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

          module.exports = BusinessController ;
