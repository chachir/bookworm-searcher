import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/api.service';
import { BookService } from '../services/book.service';

import { Googlebook } from '../interfaces/googlebook';
import { CATEGORY_LIST } from '../data-categories/filter-lists';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent implements OnInit {
  recentBooks: Googlebook;
  relevantBooks: Googlebook;

  categories = CATEGORY_LIST;
  selectedCategory = this.categories[0].category;
  max_results = 'maxResults=7';

  


  constructor(private APIService: APIService, private data: BookService) { }

  ngOnInit(): void {

    this.recentBooks = {
      totalItems: 0,
      items: null,
    };
    this.relevantBooks = {
      totalItems: 0,
      items: null,
    };

    this.getNewBooks(this.selectedCategory);
    this.getTopBooks(this.selectedCategory);
  }


  /** Recommendations on home page */
  getNewBooks(category: string): void{
    this.APIService.search('subject:' + category + '&orderBy=newest&' + this.max_results).subscribe((recentBooks) => {this.recentBooks = recentBooks;   });
  }

  getTopBooks(category: string): void{
    this.APIService.search('subject:' + category + '&orderBy=relevance&' + this.max_results).subscribe((relevantBooks) => {this.relevantBooks = relevantBooks;   });
  }

}
