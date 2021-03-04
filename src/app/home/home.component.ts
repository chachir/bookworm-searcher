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
    this.getPrueba();
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
    this.APIService.searchByKeyword("robótica").subscribe((books) => {this.books = books; });
    this.APIService.filterByLanguage("all").subscribe((books) => {this.books = books;});
    //this.APIService.filterByPublisherDate("2011").subscribe((books) => {this.books = books; });
    this.APIService.orderBy(2).subscribe((books) => {this.books = books; console.log(this.books)});
  }
  /***************** */

}




