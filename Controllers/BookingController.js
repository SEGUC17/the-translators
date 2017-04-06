var Book = require('../Models/BookingModel');

var BookingController =
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
        Booking.find({ username:req.user.username},function(err, bookings){
            if (err){
                res.send(err.message);
            }
            else{
                res.render('/MyBookings', {bookings})
            }
        }

        )
    }


  
    
}
module.exports = BookingController;

