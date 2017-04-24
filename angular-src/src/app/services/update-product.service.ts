import { Injectable } from '@angular/core';

@Injectable()
export class UpdateProductService {

  constructor() { }

   validateUpdateProducts(product){
    if(product.prodname == undefined || product.price == undefined || product.Quantity == undefined ||
     product.image == undefined || product.ProductDescription == undefined){
      return true;
    } else {
      return false;
    }
  }

}
