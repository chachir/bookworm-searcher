import { Component, OnInit } from '@angular/core';
import {APIService} from '../Servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  APIService: any;
  book: any;

  constructor() { }

  ngOnInit(): void {
    this.getTopBook();
  }

  getNewBooks(): void{

  }

  getTopBook(): void {
    this.APIService.getTopBooks().subscribe((book: any) => this.book = book);
    console.log(this.book);
  }

}




