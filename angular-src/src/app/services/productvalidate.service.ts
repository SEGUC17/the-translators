import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductValidateService {

  constructor(private http: Http) { 
    console.log('product is seen');
  }
  getProduct(){
    return this.http.get('http://localhost:8080/viewproducts')
    .map(res => res.json());
  }
updateProductStatus(Product){
        var headers = new Headers();
        headers.append('Content-Type','application/json'); //check this line
        return this.http.put('http://localhost:8080/ChangeBookingStatus'+Product.prodname, 
        JSON.stringify(Product), {headers: headers}).map(res => res.json());
    }

   
}
