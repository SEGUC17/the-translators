var Booking = require('../Models/BookingModel');
var Customer = require('./CustomerController');
var Business = require('./BusinessController');

var BookingController ={

    createBooking : function(req, res){

        var customerBooking = new Booking (
            req.body
        );

        customerBooking.save(function(err, customerBooking){
        if(err){
            console.log(err.message);
            return res.JSON.stringfy(err.message);
        }
        else{

                console.log(customerBooking);
                res.JSON('booking request submitted successfully');

        }
        })
    },
    // This method is for customers to view their bookings
  ViewMyBookings : function(req,res){
      Booking.find({ username:req.user.username},function(err, bookings){
          if (err){
              res.JSON.stringfy(err.message);
          }
          else{
              res.render('/MyBookings', {bookings})
          }
      }

      )
  },
    //This method retrieves bookings associated to the Logged In Business Account/User
    ViewBusinessBookingList : function(req, res){
        //Get the business associated with the logged in user
        var user = Business.getBusinessByUsername;
        //Find the bookings associated with the Gym Name for the logged in Business User
        Bookings.find({GymNameLocation: user.GymName_location}, function(err, bookings){
            if(err){
                res.JSON.stringfy(err.message);
            }
            else{
                res.render('/BusinessBookings', {bookings});
            }
        })
    },

    ChangeCustomerBookingRequestStatus : function(req, res){
        var bookingId = req.params.User_ID;
        var NewStatus = {ConfirmationStatus:req.body};
        Bookings.findOneAndUpdate(bookingId,NewStatus,function(err,booking){
            if(err){
                res.JSON.stringfy(err.message);
            }
            else{
                res.JSON.stringfy('Status Updated Successfully');
            }
        })

    }
}
module.exports = BookingController;
