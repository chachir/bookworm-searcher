import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { Subcategory } from '../subcategory';
import { NumItems } from '../num-items';

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
  
  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void{ 
    this.APIService.getAllCategories().subscribe((categories) => {this.categories = categories; });
  }

  getCounter(category_id: number): string {
    this.APIService.counterCategory(category_id).subscribe((numCategory) => {this.numCategory = numCategory; });
    return "hoa"; //this.numCategory.num_items;
  }

}
