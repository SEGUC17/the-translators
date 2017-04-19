import { Component, OnInit } from '@angular/core';

import {BusinessvalidateService} from '../../services/businessvalidate.service';
import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-uploadproducts',
  templateUrl: './uploadproducts.component.html',
  styleUrls: ['./uploadproducts.component.css']
})
export class uploadproductsComponent implements OnInit {

  prodname: String;
  prodID: String;
  price: Number;
  image: File;
  ProductDescription: String;
  Category: String;
  Quantity: Number;
  

  constructor(private businessValidateService: BusinessvalidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ononUploadproducts(){
    var business = {
      prodname: this.prodname,
      prodID: this.prodID,
      price: this.price,
      image: this.image,
      ProductDescription: this.ProductDescription,
      Category: this.Category,
      Quantity: this.Quantity
    }

    if(!this.businessValidateService.validateProducts(business)){
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }


    //upload products business
   this.authService.uploadProducts(business).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('Your products are uploaded', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/businesslogin']);
        } else {
          this.flashMessage.show('Something went wrong re-upload your product', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/uploadproducts']);
        }
    });

  }

}
