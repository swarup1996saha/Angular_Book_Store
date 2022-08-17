import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/service/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books!:any
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.getAllBooks()
    this.sortBooks()
    this.priceFilter()
  }
  getAllBooks(){
    this.bookService.getAllBooks().subscribe((response)=>{
      this.books=response
      console.log(this.books);
    })
  }

  sortBooks(){
    this.bookService.sortSubject.subscribe((sortCriterion:any)=>{
      this.books=this.bookService.sortBooks(sortCriterion)
    })
  }

  priceFilter(){
    this.bookService.priceFilterSubject.subscribe((price:any)=>{
      this.bookService.getAllBooks().subscribe((res:any)=>{
        this.books=res
        this.books=this.bookService.getFilteredBooksByPrice(price)
      })
    })
  }
}
