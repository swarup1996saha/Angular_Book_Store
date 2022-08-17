import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/service/books.service';

@Component({
  selector: 'app-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.css']
})
export class SidePannelComponent implements OnInit {
  isPriceFiltersVisible:boolean=false
  PriceFilters!: [500]
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
  }

  showPriceFilters(){
    this.isPriceFiltersVisible = !this.isPriceFiltersVisible
  }
  filterBooksByPrice(priceFilter:any){
    this.bookService.getPriceFilter(priceFilter)
  }
}
