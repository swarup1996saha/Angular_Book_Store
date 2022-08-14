import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:any[]=[]
  cartSubject = new Subject()
  constructor() { }

  addProductToCart(product:any){
    let currentBook = {...product,count:1}
    this.cartProducts.push(currentBook)
    console.log("🚀 ~ file: cart.service.ts ~ line 13 ~ CartService ~ addProductToCart ~ cartProd̥ucts", this.cartProducts)
    this.cartSubject.next(this.cartProducts)
  }

  getAllCartItems(){
    return this.cartProducts
  }
}
