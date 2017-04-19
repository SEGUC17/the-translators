import { Component }  from '@angular/core' ;
import { Http, Headers } from '@angular/http';

@Component(
    {
        selector :'header',
        template :` <div class="text-right">
                <a class="btn btn-success btn-green" href="#reviews-anchor" id="open-review-box">Leave a Review</a>
            </div>

            <div class="row" id="post-review-box" style="display:none;">
                <div class="col-md-12">
                    <form accept-charset="UTF-8" (click)="click()">
                        <input [(ngModel)]="review" id="ratings-hidden" name="rating" type="hidden">
                        <textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5"></textarea>

                        <div class="text-right">
                            <div class="stars starrr" data-rating="0"></div>
                            <a class="btn btn-danger btn-sm" href="#" id="close-review-box" style="display:none; margin-right: 10px;">
                            <span class="glyphicon glyphicon-remove"></span>Cancel</a>
                            <button class="btn btn-success btn-lg" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>`
    }
)

export class ReviewandRateComponent{
review;
constructor(private http:Http) {
}

click(){
var header = new Headers;
this.http.post('http://localhost:8080/review', this.review, header).subscribe(err => console.log(err));
}
 

}

