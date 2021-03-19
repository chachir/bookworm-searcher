import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

import { Googlebook } from '../interfaces/googlebook';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent implements OnInit {
  recentBooks: Googlebook;
  relevantBooks: Googlebook;
  categories = ["art", "physics", "mathematics", "engineering", "technology", "poetry"];
  selectedCategory = "art";


  constructor(private APIService: APIService) { }

  ngOnInit(): void {

    this.getNewBooks(this.selectedCategory);
    this.getTopBooks(this.selectedCategory);

  }

  show(){
    console.log("hello");
  }


  /** Recommendations on home page */
  getNewBooks(category: string): void{
    this.APIService.search('subject:' + category + '&orderBy=newest&maxResults=6').subscribe((recentBooks) => {this.recentBooks = recentBooks;   });
  }

  getTopBooks(category: string): void{
    this.APIService.search('subject:' + category + '&orderBy=relevance&maxResults=6').subscribe((relevantBooks) => {this.relevantBooks = relevantBooks;   });
  }

}
