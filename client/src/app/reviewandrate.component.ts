import {Component, Input}  from '@angular/core' ;
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 //import {Router} from  '@angular/router';
//  import { FormModule } from '@NgModule()'
// import { NG_VALUE_ACCESSOR } from '@angular/forms'

@Component(
    {
        selector :'header',
        template :` <div class="text-right">
                <a class="btn btn-success btn-green" href="#reviews-anchor" id="open-review-box">Leave a Review</a>
            </div>
        
            <div class="row" id="post-review-box" style="display:none;">
                <div class="col-md-12">
                    <form (submit) = "Click()">
                        <input type="text" [(ngModel)]="review" name="review" >         
                        <div class="text-right">
                            <div class="stars starrr" data-rating="0"></div>
                            <a class="btn btn-danger btn-sm" href="#" id="close-review-box" style="display:none; margin-right: 10px;">
                            <span class="glyphicon glyphicon-remove"></span>Cancel</a>
                            <button class="btn btn-success btn-lg" type="submit" value="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>`
    }
)

export class ReviewandRateComponent{
    review: string;
    constructor(private http:Http ){};

Click(){
console.log(this.review);
const ReviewandRate = {
    body : this.review
    
};
this.http.post('http://localhost:8080/customerView', ReviewandRate).subscribe(data => console.log(data));
}





}