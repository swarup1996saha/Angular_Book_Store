import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productBook:any
  isProductInCart:boolean = false
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }

  addToCart(book:any){
    this.cartservice.addProductToCart(book)
    this.isProductInCart = true
  }
}
