import { Component, OnInit } from '@angular/core';

import {BusinessvalidateService} from '../../services/businessvalidate.service';
import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  GymName_location: String;
  Address: String;
  Email: String;
  BusinessUsername: String;
  Password: String;
  PhoneNumber: Number;
  BankName: String;
  AccountNumber: Number;
  Description: String;

  constructor(private businessValidateService: BusinessvalidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubscribeSubmit(){
    //recording the info entered by the user
    var business = {
      GymName_location: this.GymName_location,
      Address: this.Address,
      Email: this.Email,
      BusinessUsername: this.BusinessUsername,
      Password: this.Password,
      PhoneNumber: this.PhoneNumber,
      BankName: this.BankName,
      AccountNumber: this.AccountNumber,
      Description: this.Description
    }

    //check for the information validation
<<<<<<< HEAD
    if(!this.businessValidateService.validateSubscriber(business)){
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

=======

    if(!this.businessValidateService.validateSubscriber(business)){
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
  };
>>>>>>> mariamyehia
    //subscribe business
    this.authService.subscribeBusiness(business).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('You are now registered and can login', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/businesslogin']);
        } else {
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/subscribe']);
        }
    });
  }

}
