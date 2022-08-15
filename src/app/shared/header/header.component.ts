import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/service/books.service';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText!:string
  cartItemCount!:Number

  isSortmenuVisible:boolean=false
  criteria:any[]=['Price(Low to High)']
  constructor(private cartService:CartService, private bookService:BooksService) { }

  ngOnInit(): void {
    this.getCartValue()
  }

  getCartValue(){
    this.cartService.cartSubject.subscribe((cartItems:any)=>{
      this.cartItemCount=cartItems.length
    })
  }

  sortBooks(criterion:any){

  }

  showSortMenu(){
    this.isSortmenuVisible = !this.isSortmenuVisible
  }

}
