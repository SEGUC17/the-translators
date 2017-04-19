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
export class BookingrequestComponent implements OnInit {

    User_ID: String;
    CustomerUsername: String;
    GymNameLocation: String;
    selectedClass: String;
    selectedTime: Number;
    //selectedDate: Data;
    CustomerEmail: String;
    CustomerMobile: Number;
    ConfirmationStatus:String

  constructor(private bookingValidateService: BookingvalidationService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onBookingSubmit(){
    var booking = {
    User_ID: this.User_ID,
    CustomerUsername: this.CustomerUsername,
    GymNameLocation: this.GymNameLocation,
    selectedClass: this.selectedClass,
    selectedTime: this.selectedTime,
    //selectedDate: this.selectDate,
    CustomerEmail: this.CustomerEmail,
    CustomerMobile: this.CustomerMobile,
    ConfirmationStatus: this.ConfirmationStatus,
  }
  
  if(!this.bookingValidateService.validateBooking(booking)){
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

}
}
