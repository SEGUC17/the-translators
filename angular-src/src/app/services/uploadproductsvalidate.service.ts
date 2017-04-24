import { Injectable } from '@angular/core';

@Injectable()
export class UploadproductsvalidateService {

  constructor() { }

  
  validateProducts(user){
    if(user.prodname == undefined || user.prodID == undefined || user.price == undefined || user.Category == undefined || user.Quantity == undefined){
      return false;
    } else {
      return true;
    }
  }


}
