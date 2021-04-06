import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Googlebook } from '../interfaces/googlebook';

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

  recentBooks: Googlebook;

  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.getReadingSpeeding(604);
  }

  /**to do - unresolved */
  getReadingSpeeding(idBook: number){ //minutes
    this.APIService.search('subject:' + "Language" + '&orderBy=newest').subscribe((recentBooks) => {this.recentBooks = recentBooks;
                                                                                                    this.numberPages = this.recentBooks.items?.pop()?.volumeInfo.pageCount;
                                                                                                    this.time = Number(this.numberPages) * this.averageWPM / this.averageWordsPage;
                                                                                                    this.hours = Math.floor(this.time / 60);
                                                                                                    this.minutes = Math.floor(this.time % 60);});
    
  }


}
