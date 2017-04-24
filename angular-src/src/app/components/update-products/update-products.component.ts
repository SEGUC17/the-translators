// import { Component, OnInit } from '@angular/core';

// import {UpdateProductService} from '../../services/update-product.service';
// import {AuthService} from '../../services/auth.service';

// import {FlashMessagesService} from 'angular2-flash-messages';

// import {Router} from '@angular/router';

// @Component({
//   selector: 'app-subscribe',
//   templateUrl: './update-products.component.html',
//   styleUrls: ['./update-products.component.css']
// })
// export class UpdateProductsComponent implements OnInit {

//   prodname: String;
//   price: Number;
//   Quantity:Number;
//   image: any ;
//   ProductDescription: String;


//   constructor(private updateProductService: UpdateProductService, private flashMessage: FlashMessagesService,
//   private authService: AuthService, private router: Router) { }

//   ngOnInit() {
//   }

//   onUpdateSubmit(){
//     var product = {
//       prodname: this.prodname,
//       price: this.price,
//       Quantity: this.Quantity,
//       image: this.image,
//       ProductDescription: this.ProductDescription


//     }

    //Edit product
    // this.authService.updateProduct(product).subscribe(data =>{
    //     if(data.success){
    //       this.flashMessage.show('You are now registered and can login', {cssClass: 'alert-success', timeout: 3000});
    //       this.router.navigate(['/viewproduct']);//depends on viewproduct
    //     } else {
    //        this.flashMessage.show('Something went wrong, please try again', {cssClass: 'alert-danger', timeout: 3000});
    //         this.router.navigate(['/updateproducts']);//depends on viewproduct
    //     }
    // });
  //}
//}
