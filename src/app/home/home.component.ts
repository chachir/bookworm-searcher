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
  }

  getNewBooks(): void{

  }

  getTopBooks(): void {
    this.APIService.getTopBooks().subscribe((books) => {this.books = books; console.log(this.books);});
  }

}




