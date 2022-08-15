import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cartItems:any[]=[]
  cartItemsPrice:any
  cartItemDiscount:any
  deliveryCharges:any
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems= this.cartService.getAllCartItems()
    this.getBillingDetails()
    this.cartService.cartSubject.subscribe((items:any)=>{
      this.cartItems=items
      this.getBillingDetails()
    })
  }

  getBillingDetails(){
    let billingDetails = this.cartService.getBilling(this.cartItems)
    this.cartItemsPrice= billingDetails.price
    this.cartItemDiscount = billingDetails.discount
    this.deliveryCharges = billingDetails.delivery
  }
}
