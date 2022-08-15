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
    this.bookService.sortSubject.subscribe((sortCriterion:any)=>{
      this.books=this.bookService.sortBooks(sortCriterion)
    })
  }
  getAllBooks(){
    this.bookService.getAllBooks().subscribe((response)=>{
      this.books=response
      console.log(this.books);
    })
  }
}
