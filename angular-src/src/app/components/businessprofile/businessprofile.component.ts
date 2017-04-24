import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-businessprofile',
  templateUrl: './businessprofile.component.html',
  styleUrls: ['./businessprofile.component.css']
})
export class BusinessprofileComponent implements OnInit {
business: Object;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getBusinessProfile().subscribe(profile => {
      this.business = profile.business;
    },
    err => {
      console.log(err);
      return false;
    });
  }


}
