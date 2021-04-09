import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Googlebook } from '../interfaces/googlebook';
import { ItemBook } from '../interfaces/item-book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService {

  urlGBAPI: string = "https://www.googleapis.com/books/v1/volumes";
  urlGBAPI2: string = this.urlGBAPI + "?q=";

  constructor(private http: HttpClient) { }


  /* Search */
  search(query: string): Observable<Googlebook> {
    console.log(this.urlGBAPI2 + query);
    return this.http.get<Googlebook>(this.urlGBAPI2 + query, httpOptions);
  } 

  searchById(id: string): Observable<ItemBook> {
    return this.http.get<ItemBook>(this.urlGBAPI + '/' + id, httpOptions);
  }
  

}