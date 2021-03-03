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
  

  constructor(private APIService: APIService) { 
  }

  ngOnInit(): void {
    this.getTopBooks();
    this.getNewBooks();
    this.getReadingSpeeding(17081);
  }

  getNewBooks(): void{
    this.APIService.getNewBooks().subscribe((books) => {this.books = books; });
  }

  getTopBooks(): void {
    this.APIService.getTopBooks().subscribe((books) => {this.books = books; });
  }

  getReadingSpeeding(idBook: number): void{
    this.APIService.getBookByID(idBook).subscribe((book) => {this.book = book; this.numberPages = this.book.pop()?.pages; });
  }

}




