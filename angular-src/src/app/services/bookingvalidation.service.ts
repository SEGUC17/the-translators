import { Injectable } from '@angular/core';

@Injectable()
export class BookingvalidationService {

  constructor() { }

  validateBooking(bookingrequest){
    if( bookingrequest.CustomerUsername == undefined || bookingrequest.GymNameLocation == undefined ||
      bookingrequest.selectedClass == undefined || bookingrequest.selectedTime == undefined ||
      bookingrequest.selectedDate ==undefined ){
      return false;
    } else {
      return true;
    }
  }

}
