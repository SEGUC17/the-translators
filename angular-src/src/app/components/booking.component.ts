import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
//import { BookingvalidationService } from '../../services/bookingvalidation.service';
import { Booking } from '../../Booking';
//import {AuthService} from '../../services/auth.service';
//import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


 @Component({
     moduleId: module.id,
     selector: 'app-bookings',
     templateUrl: 'booking.component.html'
 })
 export class BookingComponent implements OnInit{
     booking: Booking[];
     User_ID : any;
    CustomerUsername: string;
    GynNameLocation: string;
    selectedClass:string;
    selectedTime: string;
    selectedDate: Date;
    ConfirmationStatus: string;

     constructor(private bookingService :BookingService, 
    private router: Router) { }
  ngOnInit() {

    this.bookingService.getBookings().subscribe(booking=> {
      this.booking= booking;
    });
  }
  

     updateBookingStatus(booking){
         var CBooking = {
             User_ID: booking.User_ID,
             CustomerUsername: booking.CustomerUsername,
             GymNameLocation: booking.GymNameLocation,
             selectedClass: booking.selectedClass,
             selectedTime: booking.selectedTime,
             selectedDate: booking.selectedDate,
             ConfirmationStatus: booking.ConfirmationStatus
         };
         this.bookingService.updateBookingStatus(CBooking).subscribe(data => {
             booking.ConfirmationStatus = CBooking.ConfirmationStatus 
         });
     }
 }
