import { Component, OnInit } from '@angular/core';
import {APIService} from '../Servicios/api.service';
import {interfazLibro} from '../interfazLibro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: interfazLibro[] = [];
  book: interfazLibro[] = [];
  numberPages: String | undefined;
  averageWPM = 300;
  averageWordsPage = 500;



  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.getTopBooks();
    this.getNewBooks();
  }

  getNewBooks(): void{
    this.APIService.getNewBooks().subscribe((books) => {this.books = books; console.log(this.books);});
  }

  getTopBooks(): void {
    this.APIService.getTopBooks().subscribe((books) => {this.books = books; });
  }

  getReadingSpeeding(idBook: number): number{ //minutes
    this.APIService.getBookByID(idBook).subscribe((book) => {this.book = book; this.numberPages = this.book.pop()?.pages; });
    return this.averageWPM * this.averageWPM / this.averageWordsPage;
  }

  /***************** */
  getPrueba(): void{
    this.APIService.searchByKeyword("css3 y javascript avanzado").subscribe((books) => {this.books = books; console.log(this.books)});
  }
  /***************** */

}




