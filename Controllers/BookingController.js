var Booking = require('../Models/BookingModel');

var BookingController ={
  
    createBooking : function(req, res){

        var customerBooking = new Booking (
            req.body
        );

        customerBooking.save(function(err, customerBooking){
        if(err){
            return res.send(err.message);
        }
        else{
            
                console.log(customerBooking);
                res.send('booking request submitted successfully');
            
        }
        })
    }
}
module.exports = BookingController;

