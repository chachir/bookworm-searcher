import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/api.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {
  
  constructor(private APIService: APIService) { }
  nLibros = 3;

  ngOnInit(): void {
    //this.getCategories();
    //this.getNewBooks();
  }

  /*getCategories(): void{ 
    this.APIService.getAllCategories().subscribe((categories) => {this.categories = categories; });
  }*/

  /*getNewBooks(): void{
    this.APIService.getNewBooks().subscribe((newBooks) => {this.newBooks = newBooks; });
  }*/
  
  setNewValueBook(num: number){
    this.nLibros = num;
    console.log(num);
  }

}
