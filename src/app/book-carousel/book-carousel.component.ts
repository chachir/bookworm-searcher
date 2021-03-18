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
  categories = ["Art", "Physics", "Mathematics", "Engineering", "Technology", "Poetry"];


  constructor(private APIService: APIService) { }

  ngOnInit(): void {

    this.getNewBooks('Art');
    this.getTopBooks('Art');

  }

  getNewBooks(category: string): void{
    this.APIService.getRecentBooks(category).subscribe((recentBooks) => {this.recentBooks = recentBooks;   });
  }

  getTopBooks(category: string): void{
    this.APIService.getRelevantBooks(category).subscribe((relevantBooks) => {this.relevantBooks = relevantBooks;   });
  }

}
