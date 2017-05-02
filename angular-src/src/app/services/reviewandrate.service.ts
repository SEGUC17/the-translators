import { Injectable } from '@angular/core';

@Injectable()
export class ReviewandrateService {

  constructor() { }


  validateReviewandRate(user){
    if(user.review == undefined || user.rate == undefined ){
      return false;
    } else {
      return true;
    }
  }

}
