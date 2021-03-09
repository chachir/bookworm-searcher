import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { Subcategory } from '../subcategory';
import { NumItems } from '../num-items';
import {interfazLibro} from '../interfazLibro';


import {APIService} from '../Servicios/api.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {
  categories: Category[] = [];
  subcategories: Subcategory[] = [];
  numCategory: NumItems;
  newBooks: interfazLibro[] = [];
  
  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getNewBooks();
  }

  getCategories(): void{ 
    this.APIService.getAllCategories().subscribe((categories) => {this.categories = categories; });
  }

  /*getCounter(category_id: number): string {
    //this.APIService.counterCategory(category_id).subscribe((numCategory) => {this.numCategory = numCategory; });
    console.log(category_id);
    return "" + category_id;
  }*/

  getNewBooks(): void{
    this.APIService.getNewBooks().subscribe((newBooks) => {this.newBooks = newBooks; });
  }  

}
