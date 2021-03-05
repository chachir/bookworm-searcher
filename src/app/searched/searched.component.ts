import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { Subcategory } from '../subcategory';

import {APIService} from '../Servicios/api.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {
  categories: Category[] = [];
  subcategories: Subcategory[] = [];
  
  constructor(private APIService: APIService) { }

  ngOnInit(): void {
  }

  getCategories(): void{ //minutes
    this.APIService.getAllCategories().subscribe((categories) => {this.categories = categories; });
  }

}
