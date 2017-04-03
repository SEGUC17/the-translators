let Book = require('../Models/BookingModel');

let BookingController =
{
    createBooking : function(req,res){
        var clientBooking = new Booking (req.body);
        clientBooking.save(function(err){
            if(err)
                res.send(err.message);
            else{
                res.send('Booking request submitted succesfully!');
                res.redirect('/');
                }
        })
    },
    getAllClientBookings : function (req, res){
//        var username = req.user.username //this line will get me the logged in username
    
       
 },
 // This method is for business owners so that they can view their bookings 
    ViewMyBookings : function(req, res){
           Booking.find(
        Business.findOne({username: req.user.username}), function(err, Bookings){
            if(err){
                res.send(err.message);
            }
            else{
                res.render('/GymBookings', {Bookings}); //create this page that will show all of the client bookings for this Gym 

            }
           
       
     })
     
    }

    //i need one method for the business owner so that he/she can change the confirmation status, based one
    // which button was clicked or which item was selected from a dropdown list
    //I need a method for the customer so that he/she will be able to check the status of his/her booking
}
module.exports = BookingController;