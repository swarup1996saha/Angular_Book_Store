import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item:any
  discountedPrice:any
  itemPrice:any
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getPricedetails(this.item)
  }
  getPricedetails(item:any){
    this.discountedPrice = this.cartService.getPriceDetailsInCartItem(item).discountedPrice
    this.itemPrice = this.cartService.getPriceDetailsInCartItem(item).price
  }
}
