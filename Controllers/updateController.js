//Connecting to JS defined Schema.
let BusinessDB = require('../Models/BusinessModel');

let updateController = {
    //This function updates all the BusinessDB's info in the database if it is changed.
    updateProfile:function(businessToUpdate,res){
        var BusinessEmail = businessToUpdate.Email;
        //First, find this businessToUpdate in the database.
        if(!BusinessEmail){
      return    res.status(500).json({message:"PLEASE ENTER AN EMAIL "});

    };

        BusinessDB.findOne({Email:BusinessEmail},function(err,businessInDB){

            if(err)
            {//Didnt find a customer with a the given email to update
              console.log("dakhel 3nd not correct email");
                res.status(500).json("PLEASE ENTER A CORRECT EMAIL ");
            }else{//BusinessDB found. Check all given parameters, if given, change it.
                if(businessInDB)
                {
                    if(businessToUpdate.BusinessUsername)
                    {
                        businessInDB.BusinessUsername=businessToUpdate.BusinessUsername;
                    }
                    if(businessToUpdate.GymName_location)
                    {
                        businessInDB.GymName_location = businessToUpdate.GymName_location;
                    }
                    if(businessToUpdate.Address)
                    {
                        businessInDB.Address = businessToUpdate.Address;
                    }
                    if(businessToUpdate.Password)
                    {
                        businessInDB.Password = businessToUpdate.Password;
                    }

                    if(businessToUpdate.Email)
                    {
                        businessInDB.Email = businessToUpdate.Email;
                    }
                    if(businessToUpdate.PhoneNumber)
                    {
                        businessInDB.PhoneNumber = businessToUpdate.PhoneNumber;
                    }
                    if(businessToUpdate.BankName)
                    {
                        businessInDB.BankName = businessToUpdate.BankName;
                    }
                    if(businessToUpdate.Schedules)
                    {
                        businessInDB.Schedules = businessToUpdate.Schedules;
                    }
                    if(businessToUpdate.Description)
                    {
                        businessInDB.Description = businessToUpdate.Description;
                    }
                    if(businessToUpdate.AccountNumber)
                    {
                        businessInDB.AccountNumber = businessToUpdate.AccountNumber;
                    }}else{
                       res.status(500).json({ message: "CANNOT FIND A REGIESTERED ACCOUNT FOR THIS EMAIL" });
                       return ;
                    }

                    businessInDB.save(function(err,updatedBusiness){  // SAVING FUNCTION
                        if(err)
                        {

                            res.status(500).json({ success: false, message: "CANNOT SAVE UPDATED OBJECT IN CUSTOMER DB" });
                        }else{
                          //console.log("dakhal final ");
                            res.status(200).json({ success: true, message: "UPDATED CUSTOMER SUCCESSFULLY",updatedBusiness });
                          }

        })
    }

});
}
}


module.exports = updateController;
