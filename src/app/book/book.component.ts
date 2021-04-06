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
  getReadingSpeeding(idBook: number): number{ //minutes
    this.APIService.search('subject:' + "Language" + '&orderBy=newest').subscribe((recentBooks) => {this.recentBooks = recentBooks;
                                                                                                    this.numberPages = this.recentBooks.items?.pop()?.volumeInfo.pageCount; });
    console.log(this.numberPages);
    console.log(3);
    /*this.time = Number(this.numberPages) * this.averageWPM / this.averageWordsPage;
    this.hours = this.time / 60;
    this.minutes = this.time % 60;
    console.log(this.hours + '+' + this.minutes + '+' + this.time);*/
    return this.minutes;
  }


}
