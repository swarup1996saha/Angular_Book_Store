import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private BASE_URL = 'http://localhost:3000/books'
  books!:any[]
  filterdBooks:any

  sortCriterion:any
  sortSubject = new Subject()
  constructor(private http: HttpClient) { }

  getAllBooks(){
    return this.http.get(this.BASE_URL).pipe(map((book:any)=>{
      this.books=book
      this.filterdBooks = this.books
      return book
    }))
  }

  getSortCriterion(criterion:any){
    this.sortCriterion = criterion
    this.sortSubject.next(this.sortCriterion)
  }

  sortBooks(criteria:any){
    switch(criteria){
      case 'Price(Low to High)':
      this.filterdBooks.sort((a:any,b:any)=>{
        if(a.price<b.price){
          return -1
        }
        if(a.price>b.price){
          return 1
        }
        return 0
      })
      break
    }
    return this.filterdBooks
  }
}
