import { Injectable } from '@angular/core';

@Injectable()
export class BusinessvalidateService {

  constructor() { }

  validateSubscriber(user){
    if(user.GymName_location == undefined || user.Address == undefined || user.Email == undefined || user.BusinessUsername == undefined || user.Password == undefined || user.PhoneNumber == undefined || user.BankName == undefined || user.AccountNumber == undefined){
      return false;
    } else {
      return true;
    }
  }
  validateProducts(user){
    if(user.businessUserName == undefined || user.prodname == undefined || user.prodID == undefined || user.price == undefined || user.Category == undefined || user.Quantity == undefined){
      return false;
    } else {
      return true;
    }
  }

    validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
