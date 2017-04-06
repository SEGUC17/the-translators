//Connecting to JS defined Schema.
let BusinessDB = require('../Models/BusinessModel');

let updateController = {
    //This function updates all the BusinessDB's info in the database if it is changed.
    updateProfile:function(businessToUpdate,res){
        var BusinessEmail = businessToUpdate.email;
        //First, find this businessToUpdate in the database.
        BusinessDB.findOne({BusinessUsername:username},function(err,businessInDB){
            if(err)
            {//Internal Error
                console.log('error in updateProfile');
                res.status(500).json(err.message);
            }else{//BusinessDB found. Check all given parameters, if given, change it.
                if(businessInDB)
                {
                    if(businessToUpdate.GymName_location)
                    {
                        businessInDB.GymName_location = businessToUpdate.GymName_location;
                    }
                    if(businessToUpdate.Address)
                    {
                        businessInDB.Address = businessToUpdate.Address;
                    }
                    if(businessToUpdate.Email)
                    {
                        businessInDB.Email = businessToUpdate.Email;
                    }
                    // if(businessToUpdate.BusinessUsername)
                    // {
                    //     businessInDB.BusinessUsername = businessToUpdate.BusinessUsername;
                    }
                    if(businessToUpdate.Password)
                    {
                        businessInDB.Password = businessToUpdate.Password;
                    }
                    if(businessToUpdate.Description)
                    {
                        businessInDB.Description = businessToUpdate.Description;
                    }
                    if(businessToUpdate.PhoneNumber)
                    {
                        businessInDB.PhoneNumber = businessToUpdate.PhoneNumber;
                    }
                    if(businessToUpdate.BankName)
                    {
                        businessInDB.BankName = businessToUpdate.BankName;
                    }
                    if(businessToUpdate.profilePicture)
                    {
                        businessInDB.profilePicture = businessToUpdate.profilePicture;
                    }
                    if(businessToUpdate.AccountNumber)
                    {
                        businessInDB.AccountNumber = businessToUpdate.AccountNumber;
                    }
                    if(businessToUpdate.Description)
                    {
                        businessInDB.Description = businessToUpdate.Description;
                    }

                    if(businessToUpdate.Schedules)
                    {
                        businessInDB.Schedules = businessToUpdate.Schedules;
                    }


                    businessInDB.save(function(err,updatedBusiness){  // SAVING FUNCTION
                        if(err)
                        {
                            res.status(500).json('CANNOT SAVE UPDATED OBJECT IN BUSINESS DB');
                        }else{
                            res.status(200).json(updatedBusiness);
                        }
                    })
                }else{//BusinessDB not found. Send relevent error message.
                    console.log('error');
                    res.status(404).json('Cannot update non-existent businessToUpdate');
                }
            }
        })
    }
}


module.exports = updateController;
