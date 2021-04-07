import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/api.service';
import { BookServiceService } from '../services/book-service.service';

import { Googlebook } from '../interfaces/googlebook';
//import { CATEGORY_LIST } from '../category-list';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent implements OnInit {
  public recentBooks: Googlebook;
  relevantBooks: Googlebook;

  categories = ["ANTIQUES & COLLECTIBLES", "ARCHITECTURE", "ART", "BIBLES", "BIOGRAPHY & AUTOBIOGRAPHY", "BODY, MIND & SPIRIT", "BUSINESS & ECONOMICS", "COMICS & GRAPHIC NOVELS", "COMPUTERS", "COOKING", "CRAFTS & HOBBIES", "DESIGN", "DRAMA", "EDUCATION", "FAMILY & RELATIONSHIPS", "FICTION", "FOREIGN LANGUAGE STUDY", "GAMES & ACTIVITIES", "GARDENING ", "HEALTH & FITNESS", "HISTORY", "HOUSE & HOME", "HUMOR", "JUVENILE FICTION", "JUVENILE NONFICTION", "LANGUAGE ARTS & DISCIPLINES", "LAW", "LITERARY COLLECTIONS", "LITERARY CRITICISM", "MATHEMATICS", "MEDICAL", "MUSIC", "NATURE", "PERFORMING ARTS", "PETS", "PHILOSOPHY ", "PHOTOGRAPHY", "POETRY", "POLITICAL SCIENCE", "PSYCHOLOGY", "REFERENCE", "RELIGION", "SCIENCE", "SELF-HELP", "SOCIAL SCIENCE", "SPORTS & RECREATION", "STUDY AIDS", "TECHNOLOGY & ENGINEERING", "TRANSPORTATION", "TRAVEL", "TRUE CRIME", "YOUNG ADULT FICTION", "YOUNG ADULT NONFICTION"];
  selectedCategory = this.categories[0];

  


  constructor(private APIService: APIService, private data: BookServiceService) { }

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
    this.APIService.search('subject:' + category + '&orderBy=newest&maxResults=6').subscribe((recentBooks) => {this.recentBooks = recentBooks;   });
  }

  getTopBooks(category: string): void{
    this.APIService.search('subject:' + category + '&orderBy=relevance&maxResults=6').subscribe((relevantBooks) => {this.relevantBooks = relevantBooks;   });
  }

}
