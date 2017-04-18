import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';

import {Router} from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-businesslogin',
  templateUrl: './businesslogin.component.html',
  styleUrls: ['./businesslogin.component.css']
})
export class BusinessloginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onBusinessLoginSubmit(){
    var business = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateBusiness(business).subscribe(data => {
          if(data.success){
            this.authService.storeBusinessData(data.token, data.business);
            this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
            this.router.navigate(['dashboard']);
          }else{
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
            this.router.navigate(['businesslogin']);
          }
    });
  }

}
