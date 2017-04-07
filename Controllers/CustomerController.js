//MulterDepndencies

// var multer = require('multer');
// var workData = multer({dest:'views/uploads'});
// var type = workData.single('upload');
// var fileStream = require('fs');

let Customer = require('/home/basel/Desktop/baselAkherHAGA/the-translators/Models/CustomerModel.js');


var updateController2 = require("./updateController2");


let CustomerController = {

    //Taking info from user to update
    updateProfile:function(req,res){
        // creating an new user object if any of the attributes arent in the body
             // it wont update in the updateController

            let incomingReq = new Customer({
                email:req.decoded._doc.email,
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                age:req.body.age,
                password:req.body.password,
                mobilenumber:req.body.mobilenumber,
                gender:req.body.gender,



            });
            //For schedule only
            // var targetPath = "";
            // if(!req.file)
            // {
            //     targetPath = "views/uploads/default.jpg";
            // }else{
            //     targetPath = 'views/uploads/' + req.file.originalname;
            //     var file = fileStream.createReadStream(req.file.path);
            //     var final = fileStream.createWriteStream(targetPath);
            //     file.pipe(final);
            //     fileStream.unlink(req.file.path);
            // }
            // if(targetPath != "views/uploads/default.jpg")
            // {
            //     incomingReq.Schedules = targetPath;
            // }
            //Updating the business
            updateController2.updateProfile(incomingReq,res);

            //redirecting to customer view
            customer.find({username :incomingReq.username}).toArray(function(err,result){ //hena 3ashan a3mel redirect hadawar 3ala username
             if(err){
               throw err;
             }
             else
             {
               response.render('CustomerProfile/view'); // selected page
          }
          })

    }
    //This function takes in the desired user's email, an views all relevant information.

}

//Export for the rest of the project.
module.exports = CustomerController;
