import { Component } from '@angular/core';
import { ProductService } from './Product/product.service';
import {CartStore} from './Cart/cart.store';

@Component({
  selector: 'navbar',
  templateUrl: '../navbar/navbar.component.html',
  styleUrls: ['../navbar/navbar.component.css'],
  providers: []
})
export class NavBarComponent {

  public cart:any = [];
  
  public totalPrice: number;
  public totalQuantity: any; 

  constructor(private productService:ProductService, private cartStore: CartStore) {}

  getTotalPrice() {
    let totalCost: Array<number> = []
    let quantity: Array<number> = []
    let intPrice: number
    let intQuantity: number

    this.cart.products.forEach((item, i) => {
      intPrice = parseInt(item.price)
      intQuantity = parseInt(item.quantity)
      totalCost.push(intPrice)
      quantity.push(intQuantity)
    })

    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item
    }, 0)
    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item
    }, 0)

  }
  ngOnInit() {
    this.cartStore.getState().subscribe(res => {
      this.cart = res
      this.getTotalPrice()
    })
  }
  
}
