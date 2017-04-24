import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService{
    constructor (private http: Http){
        console.log('Booking Service Up and Running');
    }
    //get bookings for customers
    getBookings(){
        return this.http.get('http://localhost:8080/MyBookings')
        .map(res => res.json());
    }

    updateBookingStatus(booking){
        var headers = new Headers();
        headers.append('Content-Type','application/json'); //check this line
        return this.http.put('http://localhost:8080/ChangeBookingStatus'+booking.User_ID, 
        JSON.stringify(booking), {headers: headers}).map(res => res.json());
    }
}
