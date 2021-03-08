import { Component, OnInit } from '@angular/core';
import {APIService} from '../Servicios/api.service';
import {interfazLibro} from '../interfazLibro';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: interfazLibro[] = [];
  numberPages: string | undefined;
  averageWPM: number = 300;
  averageWordsPage: number = 500;
  time: number;
  hours: number;
  minutes: number;

  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.getReadingSpeeding(604);
  }

  getReadingSpeeding(idBook: number): number{ //minutes
    this.APIService.getBookByID(idBook).subscribe((book) => {this.book = book; this.numberPages = this.book.pop()?.pages; });
    console.log(this.numberPages);
    this.time = parseInt(this.numberPages!, 10) * this.averageWPM / this.averageWordsPage;
    this.hours = this.time / 60;
    this.minutes = this.time % 60;
    console.log(this.hours + '+' + this.minutes + '+' + this.time);
    return this.minutes;
  }


}
