import { Component, OnInit } from '@angular/core';
// import { Products }  from '../../Products';
import { Router } from '@angular/router';
import { ProductValidateService } from '../services/productvalidate.service';
 
@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // products: Products[];
  businessUserName:string;
  prodname: string;
  prodID: string;
  price: number;
  Quantity:number;
  image: string;
  ProductDescription: string;
  Category: string;
  

  constructor(private productValidateService: ProductValidateService,
  private router: Router) {}

  ngOnInit() {
    this.productValidateService.getProduct().subscribe(products => {
      // this.products=products;
    })
  }
      updateProductStatus( products){
        var Product = {
            prodname: Product.prodname,
            prodID: Product.prodID,
            price: Product.price,
            Quantity: Product.Quantity,
            image: Product.image,
            ProductDescription: Product.ProductDescription
              };
              this.productValidateService.updateProductStatus(Product).subscribe(data => {
             Product.ProductDescription = Product.ProductDescription 
         });
              }
    }


