import { Component }  from '@angular/core' ;
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Component(
    {
        selector :'visitor',
        template :` 
                     <h1> Gym Page </h1>
                     <img src="https://cdn.gearpatrol.com/wp-content/uploads/2016/06/gear-patrol-stop-doing-this-at-gym-lead-full.jpg" alt="Gym's photo" width="970" height="650" class="pull-left img-responsive postImg img-thumbnail margin10">
                    
                     <article><p>
                              Here we will show the gym data
                         </p>
                         <div *ngIf="business">
                <h2 class="page-header">{{business.GymName_location}}</h2>
                        <ul class="list-group">
                <li class="list-group-item"> Address:{{business.Address}}</li>
                <li class="list-group-item"> Email:{{business.Email}}</li> 
                <li class="list-group-item"> PhoneNumber:{{business.PhoneNumber}</li> 
               <li class="list-group-item"> Description:{{business.Description}}</li>
                      </ul>
                     </div>
                     
                     </article>`
    }
)

export class VisitorComponent{
    user : any ;
    constructor (private http: Http){};
    
    getGymPage(BusinessUsername)
    {
     return this.http.get('http://localhost:8080/visitorView' + BusinessUsername).map(res => res.json());
    }

}

