import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

//import {interfazLibro} from '';


import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { interfazLibro } from '../interfazLibro';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService {

  urlAPI: string = 'https://www.etnassoft.com/api/v1/get/';
  filterURL: string = this.urlAPI;

  constructor(private http: HttpClient) { }

  getTopBooks(): Observable<interfazLibro[]> {
    return this.http.get<interfazLibro[]>(this.urlAPI + '?most_viewed&num_items=6', httpOptions); //most_commented
  }

  getNewBooks(): Observable<interfazLibro[]> {
    return this.http.get<interfazLibro[]>(this.urlAPI + '?order&num_items=6', httpOptions); //order newest
  }




  /* Searcher filters */
  filterByLanguage(lang: string){
    this.filterURL = this.filterURL + '&?lang=' + lang;
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByAuthor(author: string){
    this.filterURL = this.filterURL + '&?book_author="' + author + '"';
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByCategory(category: string){
    this.filterURL = this.filterURL + '&?category=' + category;
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterBySubcategory(subcategory: string){
    this.filterURL = this.filterURL + '&?subcategory=' + subcategory;
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }


  filterByPublisher(publisher: string){
    this.filterURL = this.filterURL + '&?publisher="' + publisher + '"';
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByPublisherDate(date: string){
    this.filterURL = this.filterURL + '&?publisher_date=' + date;
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  numItems(num: string){
    this.filterURL = this.filterURL + '&?num_items=' + num;
  }
  
  filterByPages(pages: string){
    this.filterURL = this.filterURL +'&?results_range="' + pages + '"';

    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  orderBy(order: number){
    if(order == 0) {
      this.filterURL = this.filterURL + '&?order=a_z';
    } else if (order == 1) {
      this.filterURL = this.filterURL + '&?order=z_a';
    } else if (order == 2) {
      this.filterURL = this.filterURL + '&?order=newest';
    } else if (order == 3) {
      this.filterURL = this.filterURL + '&?order=oldest';
    }

    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }


  getBookByID(idBook: number){
    return this.http.get<interfazLibro[]>(this.urlAPI + '?id=' + idBook, httpOptions);
  }

}
