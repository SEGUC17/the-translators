//Connecting to JS defined Schema.
let CustomerDB = require('../Models/CustomerModel');

let updateController = {
    //This function updates all the CustomerDB's info in the database if it is changed.
    updateProfile:function(customerToUpdate,res){
        var CustomerEmail = customerToUpdate.email;
        //First, find this businessToUpdate in the database.
        CustomerDB.findOne({email:CustomerEmail},function(err,customerInDB){
            if(err)
            {//Internal Error
                console.log('error in updateProfile');
                res.status(500).json(err.message);
            }else{//CustomerDB found. Check all given parameters, if given, change it.
                if(customerInDB)
                {
                    if(cutomerToUpdate.firstname)
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
                    // if(customerToUpdate.username)
                    // {
                    //     customerInDB.username = customerToUpdate.username;
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
                    }
                    



                    customerInDB.save(function(err,updatedCustomer){  // SAVING FUNCTION
                        if(err)
                        {
                            res.status(500).json('CANNOT SAVE UPDATED OBJECT IN CUSTOMER DB');
                        }else{
                            res.status(200).json(updatedCustomer);
                        }
                    })
                }else{//CustomerDB not found. Send relevent error message.
                    console.log('error');
                    res.status(404).json('Cannot update non-existent customerToUpdate');
                }
            }
        })
    }
}


module.exports = updateController2;
