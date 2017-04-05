let Book = require('../Models/BookingModel');

let BookingController =
{
    //This method creates and saves Customers' booking request for Gym classes
    createBooking : function(req,res){
         var CurrentUser = req.user.username;
        var clientBooking = new Booking (req.body);
        clientBooking._creator= CurrentUser._id; //check  this part
        clientBooking.save(function(err){
            if(err)
                res.send(err.message);
            else{
                res.send('Booking request submitted succesfully!');
                res.redirect('/');
                }
        })
    },
     // This method is for customers to view their bookings 
    ViewMyBookings : function(req,res){
        Booking.find({ username:req.user.username},function(err){
            if (err){
                res.send(err.message);
            }
            else{
                //res.render('MyBookings', {Bookings}); //need to create MyBooking page first
            }
        }

        )
    }
//     // This method is for business owners so that they can view their bookings
//     getAllClientBookings : function (req, res){

       
//  },
//     ViewMyBookings : function(req, res){
//         Booking.findOne({username: req.user.username}).populate ('_creator').exec(function(err, bookings){
//             if (err)return handleError(err);
//         })
       
//     }

    //i need one method for the business owner so that he/she can change the confirmation status, based one
    // which button was clicked or which item was selected from a dropdown list
    
}
module.exports = BookingController;

