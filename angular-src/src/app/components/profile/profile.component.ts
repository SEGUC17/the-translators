import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer: Object;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getCustomerProfile().subscribe(profile => {
      this.customer = profile.customer;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
