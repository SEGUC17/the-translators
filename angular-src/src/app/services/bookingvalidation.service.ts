import { Injectable } from '@angular/core';

@Injectable()
export class BookingvalidationService {

  constructor() { }

  validateBooking(booking){
    if( booking.User_ID == undefined || booking.CustomerUsername == undefined || booking.GymNameLocation == undefined || booking.selectedClass == undefined || booking.selectedTime == undefined || booking.CustomerEmail == undefined || booking.CustomerMobile == undefined || booking.ConfirmationStatus == undefined){
      return false;
    } else {
      return true;
    }
  }

}
