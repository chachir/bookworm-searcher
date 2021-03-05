import { Component, OnInit } from '@angular/core';
import {APIService} from '../Servicios/api.service';
import {interfazLibro} from '../interfazLibro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topBooks: interfazLibro[] = [];
  newBooks: interfazLibro[] = [];
  book: interfazLibro[] = [];
  numberPages: String | undefined;
  averageWPM = 300;
  averageWordsPage = 500;



  constructor(private APIService: APIService) { }

  ngOnInit(): void {

    this.getNewBooks();
    this.getTopBooks();

  }

  getNewBooks(): void{
    this.APIService.getNewBooks().subscribe((newBooks) => {this.newBooks = newBooks; });
  }

  getTopBooks(): void {
    this.APIService.getTopBooks().subscribe((topBooks) => {this.topBooks = topBooks; });
  }

  getReadingSpeeding(idBook: number): number{ //minutes
    this.APIService.getBookByID(idBook).subscribe((book) => {this.book = book; this.numberPages = this.book.pop()?.pages; });
    return this.averageWPM * this.averageWPM / this.averageWordsPage;
  }

}




