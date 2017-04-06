let Business = require('../Models/BusinessModel');

let BusinessController = {

    getBusiness:function(req, res){

      // retrieve the username of the business from the session
      var username = req.user.username;

      // fetch the logged in business from the database using the username rerieved
      Business.findOne({username : username },function(err,result)
      {
          // handle error
          if(err){
            throw err;
          }
          // show 404 status if no result returned
          else if(!result){
            res.status(404).send('Not found');
          }
          // redirect to the BusinessView page and send the business object fetched
          else
          {
            res.render ('BusinessView', {business: result});
          }

      })
    }
  }

  module.exports = BusinessController ;
