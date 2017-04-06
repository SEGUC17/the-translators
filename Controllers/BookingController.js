var Booking = require('../Models/BookingModel');

var customer = require('../Models/CustomerModel');

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
}
module.exports = BookingController;

