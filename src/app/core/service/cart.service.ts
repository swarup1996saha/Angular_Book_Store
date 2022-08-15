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

  getPriceDetailsInCartItem(product:any){
    let priceDetails ={
      discountedPrice: (product.price*product.count)-(product.discount)/100*(product.price*product.count),
      price: product.price*product.count
    }
    return priceDetails
  }
  incrementProductCount(product:any){
    let index = this.cartProducts.findIndex((item)=>{
      return item.isbn === product.isbn
    })
    this.cartProducts[index].count++
    this.getPriceDetailsInCartItem(product)
    this.cartSubject.next(this.cartProducts)
  }

  decrementProductCount(product:any){
    let index = this.cartProducts.findIndex((item)=>{
      return item.isbn === product.isbn
    })
    this.cartProducts[index].count--
    this.getPriceDetailsInCartItem(product)
    this.cartSubject.next(this.cartProducts)
  }
  removeItemFromcart(product:any){
    let removeConfirm = window.confirm("Are you Sure?")
    if(removeConfirm){
      let index = this.cartProducts.findIndex((item)=>{
        return item.isbn === product.isbn
      })
      this.cartProducts.splice(index,1)
      this.cartSubject.next(this.cartProducts)
    }
  }
}
