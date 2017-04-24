import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  cauthToken:any;
  bauthToken:any;
  customer:any;
  business: any;
  booking: any;
  product: any;

  constructor(private http: Http) { }

   registerCustomer(customer){
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:8080/users/register', customer, {headers: headers})
      .map(res => res.json());
    }

     uploadProducts(product){
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
<<<<<<< HEAD
     return this.http.post('http://localhost:8080/uploadproducts', product, {headers: headers})
=======
<<<<<<< HEAD
     return this.http.post('http://localhost:8080/users/uploadproducts', product, {headers: headers})
=======
     return this.http.post('http://localhost:8080/uploadproducts', product, {headers: headers})
>>>>>>> origin/sara
>>>>>>> mariamyehia
      .map(res => res.json());
    }

    bookingRequest(booking){
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:8080/users/register', booking, {headers: headers}) //'http://localhost:8080/users/register' change it to the path of ur rout in the backend  (this is the linking)
      .map(res => res.json());
    }

    subscribeBusiness(business){
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:8080/users/subscribe', business, {headers: headers})
      .map(res => res.json());
    }

    authenticateCustomer(customer){
      let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:8080/users/customerauthenticate', customer, {headers: headers})
      .map(res => res.json());
    }

    getCustomerProfile(){
      let headers = new Headers();
      this.loadCToken();
      headers.append('Authorization', this.cauthToken);
     headers.append('Content-Type', 'application/json');
     return this.http.get('http://localhost:8080/users/customerprofile', {headers: headers})
      .map(res => res.json());
    }

     authenticateBusiness(business){
      let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:8080/users/businessauthenticate', business, {headers: headers})
      .map(res => res.json());
    }

    getBusinessProfile(){
      let headers = new Headers();
      this.loadBToken();
      headers.append('Authorization', this.bauthToken);
     headers.append('Content-Type', 'application/json');
     return this.http.get('http://localhost:8080/users/businessprofile', {headers: headers})
      .map(res => res.json());
    }

    storeCustomerData(token, customer){
      localStorage.setItem('id_token', token);
      localStorage.setItem('customer', JSON.stringify(customer));
      this.cauthToken = token;
      this.customer = customer;
    }

     storeBusinessData(token, business){
      localStorage.setItem('id_token', token);
      localStorage.setItem('business', JSON.stringify(business));
      this.bauthToken = token;
      this.business = business;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    storeProductData(token, product){
      localStorage.setItem('id_token', token);
      localStorage.setItem('product', JSON.stringify(product));
      this.cauthToken = token;
      this.product = product;
    }
=======
>>>>>>> origin/sara
>>>>>>> mariamyehia

    loadCToken(){
      var token = localStorage.getItem('id_token');
      this.cauthToken = token;
    }

    loadBToken(){
      var token = localStorage.getItem('id_token');
      this.bauthToken = token;
    }

    loggedIn() {
      return tokenNotExpired();
    }

    logout(){
      this.bauthToken = null;
      this.cauthToken = null;
      this.customer = null;
      this.business = null;
      localStorage.clear();
    }

}
