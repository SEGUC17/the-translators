  //Connecting to JS defined Schema.
  let CustomerDB = require('../Models/CustomerModel');

  let updateController2 = {
      //This function updates all the CustomerDB's info in the database if it is changed.
      updateProfile:function(customerToUpdate,res){
          var CustomerEmail = customerToUpdate.email;
          //First, find this businessToUpdate in the database.
          if(!CustomerEmail){
            res.status(500).json("PLEASE ENTER AN EMAIL ")};
          CustomerDB.findOne({email:CustomerEmail},function(err,customerInDB){

              if(err)
              {//Didnt find a customer with a the given email to update
                  res.status(500).json("PLEASE ENTER A CORRECT EMAIL ");
              }else{//CustomerDB found. Check all given parameters, if given, change it.
                  if(customerInDB)
                  {
                      if(customerToUpdate.username)
                      {
                          customerInDB.username=customerToUpdate.username;
                      }
                      if(customerToUpdate.firstname)
                      {
                          customerInDB.firstname = customerToUpdate.firstname;
                      }
                      if(customerToUpdate.lastname)
                      {
                          customerInDB.lastname = customerToUpdate.lastname;
                      }
                      if(customerToUpdate.age)
                      {
                          customerInDB.age = customerToUpdate.age;
                      }

                      if(customerToUpdate.email)
                      {
                          customerInDB.email = customerToUpdate.email;
                      }
                      if(customerToUpdate.password)
                      {
                          customerInDB.password = customerToUpdate.password;
                      }
                      if(customerToUpdate.mobilenumber)
                      {
                          customerInDB.mobilenumber = customerToUpdate.mobilenumber;
                      }
                      if(customerToUpdate.gender)
                      {
                          customerInDB.gender = customerToUpdate.gender;
                      }}else{
                          res.status(500).json('CANNOT FIND A USER BY THAT EMAIL');
                      }

                      customerInDB.save(function(err,updatedCustomer){  // SAVING FUNCTION
                          if(err)
                          {
                              res.status(500).json('CANNOT SAVE UPDATED OBJECT IN CUSTOMER DB');
                          }else{
                            console.log("dakhal final ");
                              res.status(200).json(updatedCustomer); }

          })
      }

  });
  }
  }


  module.exports = updateController2;
