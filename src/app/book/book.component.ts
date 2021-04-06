import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APIService } from '../services/api.service';
import { ItemBook } from '../interfaces/item-book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  numberPages: string | undefined;
  averageWPM: number = 300;
  averageWordsPage: number = 500;
  time: number;
  hours: number;
  minutes: number;

  book: ItemBook;

  constructor(private APIService: APIService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.getReadingSpeeding(id);
    }
  }

  /**to do */
  getReadingSpeeding(idBook: string){
    this.APIService.searchById(idBook).subscribe((book) => {this.book = book;
                                                                                                    this.numberPages = this.book.volumeInfo.pageCount;
                                                                                                    this.time = Number(this.numberPages) * this.averageWPM / this.averageWordsPage;
                                                                                                    this.hours = Math.floor(this.time / 60);
                                                                                                    this.minutes = Math.floor(this.time % 60);
                                                                                                    console.log(this.book);});
    
  }


}
