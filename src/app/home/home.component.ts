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

  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.getTopBooks();
    this.getNewBooks();
  }

  getNewBooks(): void{
    this.APIService.getNewBooks().subscribe((books) => {this.books = books; console.log(this.books);});
  }

  getTopBooks(): void {
    this.APIService.getTopBooks().subscribe((books) => {this.books = books; console.log(this.books);});
  }

  getAllCategories(): void{
    this.APIService.getAllCategories().subscribe((books) => {this.books = books; console.log(this.books);});
  }

}




