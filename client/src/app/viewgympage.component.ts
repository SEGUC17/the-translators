import { Component }  from '@angular/core' ;
import { Http, Headers } from '@angular/http';

@Component(
    {
        selector :'header',
        template :` <div class="text-right">
                <a class="btn btn-success btn-green" href="#gyms-anchor" id="open-review-box">view Gym Page</a>
            </div>

            <div class="row" id="post-review-box" style="display:none;">
                <div class="col-md-12">
                    <form accept-charset="UTF-8" (click)="click()">
                        <input [(ngModel)]="review" id="ratings-hidden" name="rating" type="hidden">
                        <textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5"></textarea>

                        <div class="text-right">
            
                            <a class="btn btn-danger btn-sm" href="#" id="close-review-box" style="display:none; margin-right: 10px;">
                            <span class="glyphicon glyphicon-remove"></span>Cancel</a>
                             
                        </div>
                    </form>
                </div>
            </div>`
    }
)

export class ViewGymPageComponent{
viewpage;
constructor(private http:Http) {
}

click(){
var header = new Headers;
this.http.post('http://localhost:8080/viewpage', this.viewpage, header).subscribe(err => console.log(err));
}
 

}

