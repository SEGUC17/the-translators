import { Component, OnInit } from '@angular/core';

import {CustomervalidateService} from '../../services/customervalidate.service';
import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname: String;
  lastname: String;
  age: Number;
  username: String;
  email: String;
  password: String;
  mobilenumber: Number;
  gender: String;

  constructor(private customerValidateService: CustomervalidateService, private flashMessage: FlashMessagesService,
   private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    var customer = {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      username: this.username,
      email: this.email,
      password: this.password,
      mobilenumber: this.mobilenumber,
      gender: this.gender
    }

    if(!this.customerValidateService.validateRegister(customer)){
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // if(!this.customerValidateService.validateEmail(customer)){
    //   this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }

    //register user
    this.authService.registerCustomer(customer).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('You are now registered and can login', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/customerlogin']);
        } else {
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/register']);
        }
    });

  }

}
