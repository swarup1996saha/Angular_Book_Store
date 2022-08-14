import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText!:string
  cartItemCount!:Number
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCartValue()
  }

  getCartValue(){
    this.cartService.cartSubject.subscribe((cartItems:any)=>{
      this.cartItemCount=cartItems.length
    })
  }


}
