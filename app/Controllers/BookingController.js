var Bookings = require('../Models/BookingModel');
var Customer = require('./CustomerController');
var Business = require('./BusinessController');

var BookingController ={

    // createBooking : function(req, res){

    //     var customerBooking = new Bookings (
    //         CustomerUsername= req.body.CustomerUsername,
    //         GymNameLocation= req.body.GymNameLocation,
    //         selectedClass= req.body.selectedClass,
    //         selectedTime= req.body.selectedTime,
    //         selectedDate= req.body.selectedDate
    //                 );

    //     customerBooking.save(function(err, customerBooking){
    //     if(err){         
    //         console.log("HEY");
    //         // return res.status(500).json ({
    //         //         error:'Internal server error',
    //         //         data:null
    //         res.json(err.message);
    // //  })
    //     }
    //     else {
    //             console.log(customerBooking);
    //             return res.json ({
    //                 error:null,
    //                 data:customerBooking
    //  })
    //     }
    // })
    // },
    // This method is for customers to view their bookings
//   ViewMyBookings : function(req,res){
//       Booking.find({ username:req.user.username},function(err, bookings){
//           if (err){
//               res.JSON.stringfy(err.message);
//           }
//           else{
//               res.render('/MyBookings')
//           }
//       }

//       )
//   },
    //This method retrieves bookings associated with the Logged In Business User
    ViewBusinessBookingList : function(req, res){
        //Get the business associated with the logged in user
        var user = Business.getBusinessByUsername;
        //Find the bookings associated with the Gym Name for the logged in Business User
        Bookings.find({GymNameLocation: user.GymName_location}, function(err, bookings){
            if(err){
                res.JSON.stringfy(err.message);
            }
            else{
                res.render('/BusinessBookings');
            }
        })
    },

    //This method allows the Business Owner to change the status of the Booking request placed by the customer
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
