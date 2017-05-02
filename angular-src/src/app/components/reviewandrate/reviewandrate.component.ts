import { Component, OnInit } from '@angular/core';

import {ReviewandrateService} from '../../services/reviewandrate.service';
import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-reviewandrate',
  templateUrl: './reviewandrate.component.html',
  styleUrls: ['./reviewandrate.component.css']
})
export class ReviewandrateComponent implements OnInit {

  review: String;
  rate: Number;

  constructor(private reviewandrateService: ReviewandrateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onReviewandRateSubmit(){
    var randr = {
      review: this.review,
      rate: this.rate,
    }

     if(!this.reviewandrateService.validateReviewandRate(randr)){
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.reviewandRate(randr).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('Thanks for your review and rate', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']);
        } else {
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/reviewandrate']);
        }
    });
  }
}
