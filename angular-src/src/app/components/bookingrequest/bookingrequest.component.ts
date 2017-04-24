import { Component, OnInit } from '@angular/core';

import {BookingvalidationService} from '../../services/bookingvalidation.service';
import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-bookingrequest',
  templateUrl: './bookingrequest.component.html',
  styleUrls: ['./bookingrequest.component.css']
})
export class BookingrequestComponent {

    CustomerUsername: string;
    GymNameLocation: string;
    selectedClass: string;
    selectedTime: number;
    selectedDate: Date;

  constructor(private bookingValidateService: BookingvalidationService,
   private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }


  bookingRequest(){
    var booking = {
    CustomerUsername: this.CustomerUsername,
    GymNameLocation: this.GymNameLocation,
    selectedClass: this.selectedClass,
    selectedTime: this.selectedTime,
    selectedDate: this.selectedDate,
  }

  if(!this.bookingValidateService.validateBooking(booking)){
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    else{

     this.authService.bookingRequest(booking).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('You have successfully booked', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']); 
        } else {
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/bookingrequest']);
        }
    });

  }
}
}