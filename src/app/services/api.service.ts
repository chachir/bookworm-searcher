import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Googlebook } from '../interfaces/googlebook';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService {

  /*urlAPI: string = 'https://www.etnassoft.com/api/v1/get/';*/
  //filterURL: string = this.urlAPI;

  constructor(private http: HttpClient) { }

  /*getTopBooks(): Observable<interfazLibro[]> {
    return this.http.get<interfazLibro[]>(this.urlAPI + '?criteria=most_viewed&num_items=6', httpOptions); //most_commented
  }

  getNewBooks(): Observable<interfazLibro[]> {
    return this.http.get<interfazLibro[]>(this.urlAPI + '?order=newest&num_items=6', httpOptions); //order newest
  }




  /* Searcher filters */
  /*searchByKeyword(keyword: string){
    keyword = keyword.replace(/\s/gi, '+');
    this.filterURL = this.filterURL + '?keyword=' + keyword;
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByLanguage(lang: string){
    this.filterURL = this.filterURL + '&lang=' + lang;
    console.log(this.filterURL);
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByAuthor(author: string){
    this.filterURL = this.filterURL + '&book_author="' + author + '"';
    console.log(this.filterURL);
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByCategory(category: number){
    this.filterURL = this.filterURL + '&category_id=' + category;
    console.log(this.filterURL);
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }


  filterByPublisher(publisher: string){
    this.filterURL = this.filterURL + '&publisher="' + publisher + '"';
    console.log(this.filterURL);
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByPublisherDate(date: string){ //?
    this.filterURL = this.filterURL + '&publisher_date=' + date;
    console.log(this.filterURL);
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }

  filterByPages(pages: string){
    this.filterURL = this.filterURL +'&results_range="' + pages + '"';
    console.log(this.filterURL);
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }



  orderBy(order: number){
    if(order == 0) {
      this.filterURL = this.filterURL + '&order=a_z';
    } else if (order == 1) {
      this.filterURL = this.filterURL + '&order=z_a';
    } else if (order == 2) {
      this.filterURL = this.filterURL + '&order=newest';
    } else if (order == 3) {
      this.filterURL = this.filterURL + '&order=oldest';
    }
    console.log(this.filterURL);
    return this.http.get<interfazLibro[]>(this.filterURL, httpOptions);
  }


  getBookByID(idBook: number){
    return this.http.get<interfazLibro[]>(this.urlAPI + '?id=' + idBook, httpOptions);
  }


  /*** GOOGLE BOOKS API ***/
  urlGBAPI = "https://www.googleapis.com/books/v1/volumes?q=";
  getRecentBooks(category: string): Observable<Googlebook> {
    return this.http.get<Googlebook>(this.urlGBAPI + 'subject:' + category + '&orderBy=newest', httpOptions);
  }

}
