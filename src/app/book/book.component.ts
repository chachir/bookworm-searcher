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
  numberPages: String | undefined;
  averageWPM = 300;
  averageWordsPage = 500;

  constructor(private APIService: APIService) { }

  ngOnInit(): void {
  }

  getReadingSpeeding(idBook: number): number{ //minutes
    this.APIService.getBookByID(idBook).subscribe((book) => {this.book = book; this.numberPages = this.book.pop()?.pages; });
    return this.averageWPM * this.averageWPM / this.averageWordsPage;
  }


}
